import { BASE_URL, drinkInstance } from "./api";

export async function searchDrink(tag:string|null, percent:number|null, name:string|null){
  if(tag){ return await drinkInstance.get(`/search?tag=${tag}`)}
  else if(percent){ return await drinkInstance.get(`/search?percent=${percent}`)}
  else if(name) {return await drinkInstance.get(`/search?name=${name}`)}
}

export async function listUp() {
  console.log(BASE_URL);
  return await drinkInstance.get("/");
}

export async function getDrinkDetail(drinkId: string) {
  return await drinkInstance.get(`/${drinkId}`);
}
