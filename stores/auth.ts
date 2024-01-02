import { defineStore } from "pinia";

const ACCESS_TOKEN_KEY = "accessToken";

interface AuthState {
  token: string;
  username: string;
  role: string;
}

interface AuthData {
  token: string;
  accessToken: string;
  role: string;
}

export const useMyAuthStore = defineStore({
  id: "myAuthStore",
  state: (): AuthState => ({
    token: "",
    username: localStorage.getItem("username") || "",
    role: localStorage.getItem("role") || "",
  }),
  getters: {
    isAuthenticated(): boolean {
      const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY) as string | "";
      return accessToken !== "" && accessToken !== null;
    },
    getToken(): boolean {
      return this.token !== "" && this.token !== null;
    },
  },
  actions: {
    async signup(username: string, email: string, password: string) {
      try {
        await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        });
        navigateTo("/auth/signin");
        useToast().add({
          id: "signup",
          title: "Account created successfully",
          icon: "i-heroicons-check-circle",
          color: "cyan",
        });
      } catch (error: any) {
        throw new Error(error);
      }
    },
    async signin(
      username: string,
      password: string,
      ip: Promise<string>,
      userAgent: string
    ) {
      try {
        const ipAdress = await ip;
        const response = await fetch("/api/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            ip: ipAdress,
            userAgent,
          }),
        });
        if (response.ok) {
          const data: AuthData = await response.json();
          const { token, accessToken, role } = data;
          localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
          localStorage.setItem("username", username);
          localStorage.setItem("role", role);
          this.token = token;
          this.username = username;
          this.role = role;
          navigateTo("/");
          useToast().add({
            id: "signin",
            title: "Signed in successfully",
            icon: "i-heroicons-check-circle",
            color: "green",
          });
        } else {
          throw new Error(response.statusText);
        }
      } catch (error: any) {
        throw new Error(error);
      }
    },
    async signout() {
      try {
        await fetch("/api/auth/signout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            accessToken: localStorage.getItem(ACCESS_TOKEN_KEY) as string,
          }),
        });
        clearLocalStorage();
        this.token = "";
        this.username = "";
        this.role = "";
        navigateTo("/auth/signin");
        useToast().add({
          id: "signout",
          title: "Signed out successfully",
          icon: "i-heroicons-light-bulb",
          color: "orange",
        });
      } catch (error: any) {
        clearLocalStorage();
        throw new Error(error);
      }
    },
    async refresh() {
      try {
        const response = await fetch("/api/auth/refresh", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            accessToken: localStorage.getItem(ACCESS_TOKEN_KEY) as string,
            username: localStorage.getItem("username") as string,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          const { token, role } = data;
          this.token = token;
          this.role = role;
        } else {
          clearLocalStorage();
          navigateTo("/auth/signin");
          throw new Error(response.statusText);
        }
      } catch (error: any) {
        clearLocalStorage();
        navigateTo("/auth/signin");
        throw new Error(error);
      }
    },
  },
});
