import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3000/api",
});
const api2 = axios.create({
	baseURL: "http://localhost:3000",
});

export const getCookieUser = () => api2.get("/");
export const insertUser = (payload) => api.post("/user", payload);
export const getAllUsers = () => api.get("/users");
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload);
export const deleteUserById = (id) => api.delete(`/user/${id}`);
export const getUserById = (id) => api.get(`/user/${id}`);
export const connectUser = (payload) => api.put("/sign-in", payload);

export const insertCity = (payload) => api.post("/city", payload);
export const getAllCities = () => api.get("/cities");
export const deleteCityById = (id) => api.delete(`/city/${id}`);

const apis = {
	getCookieUser,
	insertUser,
	getAllUsers,
	updateUserById,
	deleteUserById,
	getUserById,
	connectUser,
	insertCity,
	getAllCities,
	deleteCityById,
};

export default apis;
