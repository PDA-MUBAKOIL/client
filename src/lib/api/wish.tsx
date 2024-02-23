import axios from 'axios';

const BASE_URL = '/api/wish';
const instance = axios.create({
    baseURL:BASE_URL,
});


export async function getAllWishs(drinkId:string){
    return await instance.get(`/${drinkId}`);
}


export async function getMyWish(drinkId:string,userId:string){
    return await instance.get(`/${drinkId}/${userId}`);
}


export async function deleteMyWish(drinkId:string,userId:string){
    return await instance.delete(`/${drinkId}/${userId}`);
}


export async function updateMyWish(drinkId:string,userId:string, 
    item:{review:string, imgUrl:string, isPublic:boolean}){
    return await instance.put(`/${drinkId}/${userId}`,{item});
}


export async function writeMyWish(drinkId:string,userId:string, 
    item:{review:string, imgUrl:string, isPublic:boolean}){
    return await instance.post(`/${drinkId}/${userId}`,{item});
}


export async function getAllMyWish(userId:string, region:string|null){
    return await instance.get(`/${userId}`,{params:{ region: region }});
}


export async function getMyRegionWish(userId:string){
    return await instance.get(`/${userId}/regioncnt`);
}