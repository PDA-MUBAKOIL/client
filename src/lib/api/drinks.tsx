import axios from "axios";

const BASE_URL = "/api/drinks";
const instance = axios.create({
  baseURL: BASE_URL,
});

export async function listUp() {
  return await instance.get('/');
}

export async function getDrinkDetail(drinkId: string) {
  return await instance.get(`/${drinkId}`);
}
