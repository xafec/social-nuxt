const authPaths = ["/auth/signin", "/auth/signup", "/auth"];

export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return;

  const { isAuthenticated } = useMyAuthStore();
  useMyAuthStore().refresh();

  if (!isAuthenticated && !authPaths.includes(to.path)) {
    abortNavigation();
    return (window.location.href = "/auth/signin");
  }

  if (isAuthenticated) {
    useMyAuthStore().refresh();

    if (authPaths.some((path) => to.fullPath.startsWith(path))) {
      window.location.href = "/";
    }

    if (!isAuthenticated) {
      abortNavigation();
      return (window.location.href = "/auth/signin");
    }
  }
});
