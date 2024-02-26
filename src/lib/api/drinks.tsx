import axios from "axios";
import { TSearchResult } from "../../components/common/SearchBar";

const BASE_URL = "/api/drinks";
const instance = axios.create({
  baseURL: BASE_URL,
});

export async function listUp() {
  // return await instance.get('/');

  return {
    data: [11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
      return {
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
    } as TSearchResult
    })}
}

export async function getDrinkDetail(drinkId: string) {
  // return await instance.post(`/${drinkId}`);
  return {
    data: {
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
    },
  };
}
