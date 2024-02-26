import { drinkInstance } from "./api";

export async function listUp() {
  return await drinkInstance.get('/');
}

export async function getDrinkDetail(drinkId: string) {
  return await drinkInstance.get(`/${drinkId}`);
}
