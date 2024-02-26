import axios from "axios";
import { TSearchResult } from "../../components/common/SearchBar";
const BASE_URL = "/api/wish";
const instance = axios.create({
  baseURL: BASE_URL,
});

export async function getAllWishes(drinkId: string) {
  return await instance.get(`/review/${drinkId}`);
}

export async function getMyWish(drinkId: string, userId: string) {
  return await instance.get(`/${drinkId}/${userId}`);
}

export async function deleteMyWish(drinkId: string, userId: string) {
  return await instance.delete(`/${drinkId}/${userId}`);
}

export async function updateMyWish(
  drinkId: string,
  userId: string,
  item: { review: string; imgUrl: string; isPublic: boolean }
) {
  return await instance.put(`/${drinkId}/${userId}`, { item });
}

export async function writeMyWish(
  drinkId: string,
  userId: string,
  item: { review: string; imgUrl: string; isPublic: boolean }
) {
  return await instance.post(`/${drinkId}/${userId}`, { item });
}

export async function getMyWishes(userId: string, region: string | null) {
  // return await instance.get(`/${userId}`,{params:{ region: region }});
  if (region) {
    return {
      data: [11, 22, 33, 44, 55, 66, 77, 88, 99, 100].map((v) => {
        return {
          _id: `_id1${v}`,
          drinkId: {
            _id: "65dc134f16170b4ea7a12928",
            name: "포엠 드라이",
            percent: "12%",
            spercent: [
                12
            ],
            imgUrl: "https://thesool.com/common/imageView.do?targetId=PR00001206&targetNm=PRODUCT",
            tags: [
                "양식",
                "기름진음식"
            ],
            description: "오크에 숙성했기 때문에 깊은 향과 맛을 가지고 있답니다.색은 루비처럼 붉은빛을 띠며 약간의 단맛이 입안을 감싼 후에 상큼한 신맛으로 마무리됩니다.",
            brewerId: {
                "_id": "65dc134f16170b4ea7a1276a",
                "name": "갈기산포도농원",
                "link": "https://smartstore.naver.com/galgisanwine",
                "tel": "01047153100",
                "__v": 0,
                "id": "65dc134f16170b4ea7a1276a"
            },
            region: "충북",
            material: "머루, 포도, 백설탕, 효모, 메타중아황산칼륨, 아황산함유",
            capacity: "750ml",
            __v: 0,
            id: "65dc134f16170b4ea7a12928"
        } as TSearchResult,
          userId: `userId${v}`,
          review: `review${v}`,
          imgUrl: `imgUrl${v}`,
          isPublic: `isPublic${v}`,
        };
      }),
    };
  } else {
    return {
      data: [1, 2, 3, 4, 5].map((v) => {
        return {
          _id: `_id1${v}`,
          drinkId: {
            _id: "65dc134f16170b4ea7a12928",
            name: "포엠 드라이",
            percent: "12%",
            spercent: [
                12
            ],
            imgUrl: "https://thesool.com/common/imageView.do?targetId=PR00001206&targetNm=PRODUCT",
            tags: [
                "양식",
                "기름진음식"
            ],
            description: "오크에 숙성했기 때문에 깊은 향과 맛을 가지고 있답니다.색은 루비처럼 붉은빛을 띠며 약간의 단맛이 입안을 감싼 후에 상큼한 신맛으로 마무리됩니다.",
            brewerId: {
                "_id": "65dc134f16170b4ea7a1276a",
                "name": "갈기산포도농원",
                "link": "https://smartstore.naver.com/galgisanwine",
                "tel": "01047153100",
                "__v": 0,
                "id": "65dc134f16170b4ea7a1276a"
            },
            region: "충북",
            material: "머루, 포도, 백설탕, 효모, 메타중아황산칼륨, 아황산함유",
            capacity: "750ml",
            __v: 0,
            id: "65dc134f16170b4ea7a12928"
        } as TSearchResult,
          userId: `userId${v}`,
          review: `review${v}`,
          imgUrl: `imgUrl${v}`,
          isPublic: `isPublic${v}`,
        };
      }),
    };
  }
}

export async function getMyRegionWishCnt(userId: string) {
  // return await instance.get(`/${userId}/regioncnt`);
  return await {
    data: {
      서울: 100,
      인천: 90,
      대전: 80,
      세종: 22,
      광주: 60,
      울산: 50,
      부산: 55,
      대구: 20,
      경기: 100,
      충북: 80,
      충남: 70,
      강원: 77,
      전북: 16,
      전남: 1,
      경북: 2,
      경남: 3,
      제주: 9,
    },
  };
}
