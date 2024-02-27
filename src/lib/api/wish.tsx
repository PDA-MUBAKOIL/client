import { TSearchResult } from "../../components/common/SearchBar";
import { wishInstance } from "./api";

export async function getAllWishes(drinkId: string, token: string) {
  return await wishInstance.get(`/review/${drinkId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export async function getMyWish(drinkId: string, token: string) {
  console.log("api drinkId: ", drinkId);
  return await wishInstance.get(`/${drinkId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export async function deleteMyWish(drinkId: string, token: string) {
  return await wishInstance.delete(`/${drinkId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export async function updateMyWish(
  drinkId: string,
  item: { token: string, review: string },
) {
  return await wishInstance.put(`/${drinkId}`, { 'review': item.review }, {
    headers: {
      Authorization: `Bearer ${item.token}`
    }
  });
}

export async function writeMyWish(
  drinkId: string,
  item: { token: string, review: string, imgUrl: string; isPublic: boolean },
) {
  return await wishInstance.post(`/${drinkId}`, { item }, {
    headers: {
      Authorization: `Bearer ${item.token}`
    }
  });
}

export async function getMyWishes(region: string | null, token: string) {
  if(region === null)  return await wishInstance.get(`/`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  else return await wishInstance.get(`/`,{
    headers: {
      Authorization: `Bearer ${token}`
    },
    params:
      { region: region }
  });
  
}

export async function getMyRegionWishCnt(token: string) {
  return await wishInstance.get(`/regioncnt`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export async function isWish(token:string,drinkId:string){
  return await wishInstance.get(`/iswish/${drinkId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}