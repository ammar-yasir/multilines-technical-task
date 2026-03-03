import api from "./apiClient";

interface QueryParams {
  skip?: number;
  limit?: number;
  sortBy?: string;
  order?: string;
  searchQuery?: string;
}

export const userService = {
  getUsers: async (queryParams: QueryParams) => {
    const res = await api.get(
      `/users${queryParams?.searchQuery ? "/search" : ""}?limit=${queryParams?.limit}&skip=${queryParams?.skip}&sortBy=${queryParams?.sortBy || "id"}&order=${queryParams?.order || "asc"}${queryParams?.searchQuery ? `&q=${queryParams?.searchQuery}` : ""}`,
    );
    const data = await res.data;
    return data;
  },
};
