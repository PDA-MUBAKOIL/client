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
        _id: "65d8413288669a99299535ed",
        name: "포엠 드라이",
        imgUrl:
          "https://thesool.com/common/imageView.do?targetId=PR00001206&targetNm=PRODUCT",
        tags: ["양식", "기름진음식"],
        description:
          "오크에 숙성했기 때문에 깊은 향과 맛을 가지고 있답니다.색은 루비처럼 붉은빛을 띠며 약간의 단맛이 입안을 감싼 후에 상큼한 신맛으로 마무리됩니다.",
        brewerId: "65d8413188669a992995342e",
        region: "충북",
        capacity: "750ml",
        material: "머루, 포도, 백설탕, 효모, 메타중아황산칼륨, 아황산함유",
        __v: 0,
        id: "65d8413288669a99299535ed",
        percent:"14.5%"
    } as TSearchResult
    })}
}

export async function getDrinkDetail(drinkId: string) {
  // return await instance.post(`/${drinkId}`);
  return {
    data: {
      _id: "",
      tags: ["dd", "dd"],
      brewerId: "d",
      region: "울산",
      capacity: "dd",
      imgUrl:
        "https://thesool.com/common/imageView.do?targetId=PR00001219&targetNm=PRODUCT",
      name: "이천미 예술",
      materials: "백미(국산), 밀누룩(국산), 정제수 밀(누룩)함유",
      percent: "14%",
      volume: "750ml",
      description:
        "국내산 이천 쌀과 500년 전통 누룩으로 빚어 전통 누룩의 깊은 향과 쌀 고유의 자연스러운 단 맛, 부드러운 목 넘김이 좋습니다.",
    },
  };
}
