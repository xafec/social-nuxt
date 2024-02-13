const authPaths = [
  "/auth/signin",
  "/auth/signup",
  "/auth",
  "/auth/signin/",
  "/auth/signup/",
  "/auth/",
];

const isAuthPath = (to: any) => {
  return authPaths.some((path) => to.fullPath.startsWith(path));
};

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return;

  const { isAuthenticated } = useMyAuthStore();
  useMyAuthStore()
    .refresh()
    .then(() => {
      if (!isAuthenticated && !isAuthPath(to)) {
        abortNavigation();
        return (window.location.href = "/auth/signin");
      }
      if (isAuthenticated && isAuthPath(to)) {
        abortNavigation();
        return (window.location.href = "/");
      }
    });
});
