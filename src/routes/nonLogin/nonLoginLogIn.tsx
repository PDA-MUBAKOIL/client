import React from "react";
import CommonButton from "../../components/common/CommonButton";

export default function NonLoginLogIn() {
  return (
    <CommonButton
      text="이메일 인증"
      onClick={() => console.log("이메일 인증")}
    />
  );
}
