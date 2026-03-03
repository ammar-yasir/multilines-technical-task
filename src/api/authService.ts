import api from "../api/apiClient";

export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  accessToken: string;
};

const TOKEN_KEY = "accessToken";

export const authService = {
  login: async (username: string, password: string) => {
    const res = await api.post("/user/login", { username, password });
    const data: User = await res.data;
    localStorage.setItem(TOKEN_KEY, data.accessToken);
    return data;
  },

  logout: async () => {
    localStorage.removeItem(TOKEN_KEY);
  },

  validateSession: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) throw new Error("No session");

    const res = await api.get("/user/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.status === 401) {
      authService.logout();
    }

    return await res.data;
  },
};
