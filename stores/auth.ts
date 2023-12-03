import { defineStore } from "pinia";

const ACCESS_TOKEN_KEY = "accessToken";

interface AuthState {
  token: string;
  error: string;
  username: string;
  role: string;
}

export const useMyAuthStore = defineStore({
  id: "myAuthStore",
  state: (): AuthState => ({
    token: "" as string,
    error: "" as string,
    username: ("" as string) || (localStorage.getItem("username") as string),
    role: ("" as string) || (localStorage.getItem("role") as string),
  }),
  getters: {
    isAuthenticated(): boolean {
      const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY) as string;
      return accessToken !== "" && accessToken !== null;
    },
    getToken(): boolean {
      return this.token !== "" && this.token !== null;
    },
  },
  actions: {
    async signup(username: string, email: string, password: string) {
      try {
        return await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }).then(() => window.location.reload());
      } catch (error: any) {
        const data = error?.response?.data;
        if (data.message) {
          return (this.error = data.message);
        }
      }
    },
  },
});
