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
        const response = await fetch("/api/auth/signup", {
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
        if (response.ok) {
          navigateTo("/auth/signin");
          useToast().add({
            id: "signup",
            title: "Аккаунт создан",
            icon: "i-heroicons-information-circle-solid",
            color: "cyan",
          });
        } else {
          useToast().add({
            id: "signup",
            title: "Ошибка создания аккаунта",
            description: `${response.statusText}`,
            icon: "i-heroicons-exclamation-circle-solid",
            color: "red",
          });
          throw new Error(response.statusText);
        }
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
            title: "Успешный вход",
            icon: "i-heroicons-check-badge-solid",
            color: "green",
          });
        } else {
          useToast().add({
            id: "signin",
            title: "Ошибка входа",
            description: `${response.statusText}`,
            icon: "i-heroicons-x-circle-solid",
            color: "red",
          });
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
          title: "Успешный выход",
          icon: "i-heroicons-exclamation-triangle-solid",
          color: "orange",
        });
      } catch (error: any) {
        clearLocalStorage();
        navigateTo("/auth/signin");
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
          useToast().add({
            id: "refresh",
            title: "Ошибка обновления токена",
            description: `${response.statusText}`,
            icon: "i-heroicons-exclamation-circle-solid",
            color: "red",
          });
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
