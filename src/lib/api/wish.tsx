import { TSearchResult } from "../../components/common/SearchBar";
import { wishInstance } from "./api";

export async function getAllWishes(drinkId: string) {
  return await wishInstance.get(`/review/${drinkId}`);
}

export async function getMyWish(drinkId: string, userId: string) {
  return await wishInstance.get(`/${drinkId}/${userId}`);
}

export async function deleteMyWish(drinkId: string, userId: string) {
  return await wishInstance.delete(`/${drinkId}/${userId}`);
}

export async function updateMyWish(
  drinkId: string,
  userId: string,
  item: { review: string; imgUrl: string; isPublic: boolean }
) {
  return await wishInstance.put(`/${drinkId}/${userId}`, { item });
}

export async function writeMyWish(
  drinkId: string,
  userId: string,
  item: { review: string; imgUrl: string; isPublic: boolean }
) {
  return await wishInstance.post(`/${drinkId}/${userId}`, { item });
}

export async function getMyWishes(region: string | null) {
  if(region === null)  return await wishInstance.get(`/`);
  else return await wishInstance.get(`/`,{params:{ region: region }});
  
}

export async function getMyRegionWishCnt() {
  return await wishInstance.get(`/regioncnt`);
}
