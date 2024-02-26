import axios from "axios";

export const BASE_URL = process.env.REACT_APP_SERVER_API;

export const drinkInstance = axios.create({
  baseURL: BASE_URL + "/drinks",
});

export const mailInstance = axios.create({
  baseURL: BASE_URL + "/mail",
});

export const userInstance = axios.create({
  baseURL: BASE_URL + "/users",
});

export const wishInstance = axios.create({
  baseURL: BASE_URL + "/wish",
});
