import axios from "axios";

const BASE_URL = "http://3.38.245.186/api/drinks";
const instance = axios.create({
  baseURL: BASE_URL,
});

export async function searchDrink(tag:string|null, percent:number|null, name:string|null){
  if(tag){ return await instance.get(`/search?tag=${tag}`)}
  else if(percent){ return await instance.get(`/search?percent=${percent}`)}
  else if(name) {return await instance.get(`/search?name=${name}`)}
}

export async function listUp() {
  return await instance.get('/');
}

export async function getDrinkDetail(drinkId: string) {
  return await instance.get(`/${drinkId}`);
}
