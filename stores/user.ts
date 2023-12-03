import { defineStore } from "pinia";

interface User {
  name: string;
  username: string;
  avatarUrl: string;
  bannerUrl: string;
  bio: string;
}

export const useMyUserStore = defineStore({
  id: "myUserStore",
  state: () => ({}),
  actions: {
    async getUser(username: string) {
      const { data } = await useFetch(`/api/user/${username}`);
      return data.value as User;
    },
  },
});
