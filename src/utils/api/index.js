import axios from "axios";

const BASE_URL = "http://192.168.1.107:8080";

export const postRegisterUser = async (data) => {
  return axios.post(`${BASE_URL}/api/register`, data).then((res) => res.data);
};

export const postLoginUser = async (data) => {
  return axios.post(`${BASE_URL}/api/login`, data).then((res) => res.data);
};

export const getLogoutUser = async () => {
  return axios.get(`${BASE_URL}/api/logout`);
};

// export const getUserId = async (token) => {
//   return axios.get(`${BASE_URL}/api/protected`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
// };

// export const getAllLinks = async (token) => {
//   return axios.get(`${BASE_URL}/api/link`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
// };

// export const postNewLink = async (token, data) => {
//   return axios.post(`${BASE_URL}/api/link`, data, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
// };

// export const deleteLink = async (token, slug) => {
//   return axios.delete(`${BASE_URL}/api/link/${slug}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
// };

// export const putUpdateLink = async (token, slug, newLinkValue) => {
//   return axios.put(`${BASE_URL}/api/link/${slug}`, newLinkValue, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
// };
