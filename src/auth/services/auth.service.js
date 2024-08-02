import api from "../../utils/api";

export const registerService = (data) => api.post("/users", data);
