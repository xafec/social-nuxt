export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return;
  if (to.path === "/u" || to.path === "/u/") {
    const username = useMyAuthStore().username;
    return navigateTo(`/u/${username}`);
  }
  if (to.path === "/api" || to.path === "/api/") {
    setTimeout(() => {
      return navigateTo("/");
    }, 1000);
  }
});
