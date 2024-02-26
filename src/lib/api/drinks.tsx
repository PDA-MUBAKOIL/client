import { BASE_URL, drinkInstance } from "./api";

export async function listUp() {
  console.log(BASE_URL);
  return await drinkInstance.get("/");
}

export async function getDrinkDetail(drinkId: string) {
  return await drinkInstance.get(`/${drinkId}`);
}
