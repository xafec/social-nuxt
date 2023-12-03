import { User } from "~/server/models/user";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  const { username, email, password } = await readBody(event);
  try {
    const user = await User.findOne({ username: RegExp(`^${username}$`, "i") });
    if (user) {
      return createError({
        statusCode: 409,
        statusMessage: "User already exists",
      });
    }
    if (await User.findOne({ email })) {
      return createError({
        statusCode: 409,
        statusMessage: "Email already exists",
      });
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
    });
    return {
      status: 201,
      message: "User created successfully",
    };
  } catch (error: any) { }
});
