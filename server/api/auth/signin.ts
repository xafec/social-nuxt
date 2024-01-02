import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type Body = {
  username: string;
  password: string;
  ip: string;
  userAgent: string;
};

const verifyUser = async (username: string, password: string) => {
  const user = await User.findOne({
    username: { $regex: `^${username}$`, $options: "i" },
  });
  if (!user) {
    return createError({
      status: 401,
      statusText: "Invalid username or password",
    });
  }
  const isMatch = await bcrypt.compare(
    password,
    user.password as unknown as string
  );
  if (!isMatch) {
    return createError({
      status: 401,
      statusText: "Invalid username or password",
    });
  }
};

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const { username, password, ip, userAgent } = (await readBody(event)) as Body;
  try {
    const user = await User.findOne({ username: RegExp(`^${username}$`, "i") });
    const error = await verifyUser(username, password);
    if (error) {
      return error;
    }
    const token = jwt.sign({ id: user?._id }, config.JWT_SECRET as string, {
      expiresIn: config.JWT_EXPIRATION_TIME as string,
    });
    const accessToken = jwt.sign(
      { id: user?._id },
      config.JWT_ACCESS_TOKEN_SECRET as string,
      { expiresIn: config.JWT_ACCESS_TOKEN_EXPIRATION_TIME as string }
    );
    await Token.create({
      accessToken,
      username: user?.username,
      ip,
      userAgent,
    });

    return {
      token,
      accessToken,
      role: user?.role,
    };
  } catch (error: any) {
    return createError({
      status: 500,
      statusText: "Something went wrong",
    });
  }
});
