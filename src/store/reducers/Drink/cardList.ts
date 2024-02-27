import { createSlice } from "@reduxjs/toolkit";

const initialState={
    title:'',
    list:[ {drinkId: 
            {brewerId: {
                id: "65dc134f16170b4ea7a12789",
                link: "https://smartstore.naver.com/bomnaeyangjo",
                name: "봄내양조장",
                tel: "0332422268",
                __v: 0,
                _id: "65dc134f16170b4ea7a12789"},
            capacity: "500ml",
            description: "단맛을 위한 인공감미료 첨가 대신 막걸리를 장기숙성시켜 쌀의 단맛과 향긋한 과일향으로 딸딸함을 최대한 끌어냈습니다.",
            id: "65dc134f16170b4ea7a1294d",
            imgUrl: "https://thesool.com/common/imageView.do?targetId=PR00001151&targetNm=PRODUCT",
            material: "정제수, 쌀(국내산), 국, 효모 (밀함유)",
            name: "힙걸리",
            percent: "6%",
            region: "강원",
            spercent: [6],
            tags: ['분식', '양식', '견과류/마른안주'],
        __v: 0,
        _id: "65dc134f16170b4ea7a1294d"},
        id: "65dd8115435e9dd415e7b07a",
        imgUrl: null,
        isPublic: true,
        review: null,
        userId: "65dd4713cb7fde08cd36541a",
        __v: 0,
        _id: "65dd8115435e9dd415e7b07a"
    }]}

const cardListSlice = createSlice({
    name: "cardList",
    initialState: initialState,
    reducers:{
        setCardList(state,action){
            state.title = action.payload.title;
            state.list = action.payload.list;
        }
    }
})

const {setCardList} = cardListSlice.actions;
export {setCardList};
export default cardListSlice.reducer;