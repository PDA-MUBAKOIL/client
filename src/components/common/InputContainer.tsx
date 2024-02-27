import React from "react";
import styled from "styled-components";

type InputProp = {
  value: string | number;
  type: string;
  placeholder: string;
  onChange: any;
};

const InputDiv = styled.input`
  width: 70vw;
  height: 7vh;
  padding: 1rem 1.2rem;
  background-color: #fff;
  color: #717171;
  box-shadow: 3px 3px 3px 0 rgb(193, 120, 120, 50%);
  border-radius: 10px;
  border: none;
  font-size: 90%;

  &:focus {
    outline: none;
  }
`;

export default function InputContainer({
  value,
  placeholder,
  onChange,
  type,
}: InputProp) {
  return (
    <InputDiv
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
