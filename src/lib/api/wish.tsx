import axios from 'axios';

const BASE_URL = '/api/wish';
const instance = axios.create({
    baseURL:BASE_URL,
});


export async function getAllWishes(drinkId:string){
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


export async function getMyWishes(userId:string, region:string|null){
    // return await instance.get(`/${userId}`,{params:{ region: region }});
    if(region){
        return {data:[11,22,33,44,55,66,77,88,99,100].map((v)=>{return{
            _id: `_id1${v}`,
            drinkId: `drinkId${v}`,
            userId: `userId${v}`,
            review: `review${v}`,
            imgUrl: `imgUrl${v}`,
            isPublic: `isPublic${v}`,
    }})}
    }else{
        return {data:[1,2,3,4,5].map((v)=>{return{
            _id: `_id1${v}`,
            drinkId: `drinkId${v}`,
            userId: `userId${v}`,
            review: `review${v}`,
            imgUrl: `imgUrl${v}`,
            isPublic: `isPublic${v}`,
    }})}
    }
}


export async function getMyRegionWishCnt(userId:string){
    // return await instance.get(`/${userId}/regioncnt`);
    return await {data: {
        "서울": 100,
        "인천": 90,
        "대전": 80,
        "세종": 0,
        "광주": 60,
        "울산": 50,
        "부산":	0,
        "대구":	20,
        "경기":	100,
        "충북":	80,
        "충남":	70,
        "강원":	0,
        "전북":	0,
        "전남":	1,
        "경북":	2,
        "경남":	3,
        "제주": 9
      }}
}