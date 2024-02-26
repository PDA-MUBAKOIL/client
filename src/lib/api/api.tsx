import axios from "axios";
import 'dotenv/config';

const BASE_URL = process.env.SERVER_API;

export const drinkInstance = axios.create({
  baseURL: BASE_URL+'/api/drinks',
});

export const mailInstance = axios.create({
  baseURL: BASE_URL+'/api/mail',
});

export const userInstance = axios.create({
  baseURL: BASE_URL+'/api/users',
});

export const wishInstance = axios.create({
  baseURL: BASE_URL+'/api/wish',
});