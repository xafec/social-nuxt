export default async (): Promise<string> => {
  const response = await fetch("https://api.ipify.org?format=json");
  const data = await response.json();
  const ip = data.ip;
  return ip;
};
