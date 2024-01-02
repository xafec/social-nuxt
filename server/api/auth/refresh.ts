import jwt from "jsonwebtoken";

type Body = {
  accessToken: string;
  username: string;
};

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { accessToken, username } = (await readBody(event)) as Body;
  try {
    const { id } = jwt.verify(accessToken, config.JWT_ACCESS_TOKEN_SECRET) as {
      id: string;
    };
    const user = await User.findById(id);
    const token = await Token.findOne({ accessToken });
    if (!user) {
      await Token.findOneAndDelete({ accessToken });
      return createError({ status: 401, statusText: "Unauthorized" });
    }
    if (!token) {
      await Token.findOneAndDelete({ accessToken });
      return createError({ status: 401, statusText: "Unauthorized" });
    }
    if ((user.username as unknown as string) !== username) {
      await Token.findOneAndDelete({ accessToken });
      throw createError({
        status: 401,
        statusText: "Unauthorized",
      });
    }
    const refreshToken = jwt.sign({ id: user._id }, config.JWT_SECRET, {
      expiresIn: config.JWT_EXPIRATION_TIME,
    });
    return {
      token: refreshToken,
      role: user.role,
    };
  } catch (error: any) {
    await Token.findOneAndDelete({ accessToken });
    return createError({ status: 401, statusText: "Unauthorized" });
  }
});
