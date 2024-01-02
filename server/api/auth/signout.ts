type Body = {
  accessToken: string;
};

export default defineEventHandler(async (event) => {
  const { accessToken } = (await readBody(event)) as Body;
  await Token.findOneAndDelete({ accessToken });
  return { status: 200 };
});
