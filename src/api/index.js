/* eslint-disable no-unused-vars */
import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3000/api",
});
const api2 = axios.create({
	baseURL: "http://localhost:3000",
});

//export const getCookieUser = () => api.get(`/`);
export const insertUser = (payload) => api.post("/user", payload);
export const getAllUsers = () => api.get("/users");
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload);
export const deleteUserById = (id) => api.delete(`/user/${id}`);
export const getUserById = (id) => api.get(`/user/${id}`);
export const connectUser = (payload) => api.post("/sign-in", payload);
export const tokenIsValid = (payload) =>
	api.post("/tokenIsValid", null, {
		headers: { "x-auth-token": payload.token },
	});
export const getUserByIdAfterAuth = (payload) =>
	api.get("/", { headers: { "x-auth-token": payload.token } });

export const insertCity = (payload) => api.post("/city", payload);
export const getAllCities = () => api.get("/cities");
export const deleteCityById = (id) => api.delete(`/city/${id}`);

const apis = {
	//getCookieUser,
	insertUser,
	getAllUsers,
	updateUserById,
	deleteUserById,
	getUserById,
	connectUser,
	tokenIsValid,
	getUserByIdAfterAuth,
	insertCity,
	getAllCities,
	deleteCityById,
};

export default apis;
