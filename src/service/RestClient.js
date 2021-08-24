import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

const getHttpHeaders = (isAuthenticated = false) => {
  // Add your custom logic here, for example add a Token to the Headers
  if (isAuthenticated) {
    return {
      headers: {
        Authorization: "Bearer YOUR_TOKEN",
      },
    };
  }

  return {};
};

const get = (path, data) => axiosInstance.get(path, data, getHttpHeaders());

const del = (path) => axiosInstance.delete(path, getHttpHeaders());

const post = (path, data) => axiosInstance.post(path, data, getHttpHeaders());

const put = (path, data) => axiosInstance.post(path, data, getHttpHeaders());

const patch = (path, data) => axiosInstance.post(path, data, getHttpHeaders());

export { axiosInstance, get, del, post, put, patch };
