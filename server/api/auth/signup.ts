import bcrypt from "bcrypt";

enum HttpStatus {
  CREATED = 201,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

type Body = {
  username: string;
  email: string;
  password: string;
};

const checkExistence = async (
  username: string,
  email: string
): Promise<null | any> => {
  const user = await User.findOne({
    username: { $regex: `^${username}$`, $options: "i" },
  });
  if (user) {
    return createError({
      status: HttpStatus.CONFLICT,
      statusText: "User already exists",
    });
  }
  if (await User.findOne({ email })) {
    return createError({
      status: HttpStatus.CONFLICT,
      statusText: "Email already exists",
    });
  }
  return null;
};

export default defineEventHandler(async (event) => {
  const { username, email, password } = (await readBody(event)) as Body;
  try {
    const error = await checkExistence(username, email);
    if (error) {
      return error;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      username,
      email,
      password: hashedPassword,
      name: "",
      avatarUrl: "",
      bannerUrl: "",
      bio: "",
      role: "user",
    });
    return {
      status: HttpStatus.CREATED,
      message: "User created successfully",
    };
  } catch (error: any) {
    return createError({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      statusText: error.message,
    });
  }
});
