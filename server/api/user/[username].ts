import { User } from "~/server/models/user";

export default defineEventHandler(async (event) => {
  const { username } = getRouterParams(event);

  try {
    const user = await User.findOne(
      { username: RegExp(`^${username}$`, "i") },
      {
        username: 1,
        name: 1,
        avatarUrl: 1,
        bannerUrl: 1,
        bio: 1,
      }
    );
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error: any) {
    return createError({
      statusCode: 404,
      statusMessage: error.message,
    });
  }
});
