import React, { ReactElement } from "react";
import { Card } from "@mantine/core";
import styled from "styled-components";
import Quit from "../../../assets/img/Modal/quit.svg";
import { useAppDispatch } from "../../../lib/hooks/reduxHooks";
import { setIsShow } from "../../../store/reducers/Drink/showModal";

export type ModalProps = {
  content: ReactElement;
};

const CardDiv = styled(Card)`
  width: 324px;
  max-height: 612px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  z-index: 2;
`;

export default function ModalCard({ content }: ModalProps) {
  const dispatch = useAppDispatch();

  return (
    <CardDiv>
      <img
        onClick={() => dispatch(setIsShow(false))}
        src={Quit}
        alt="닫는 아이콘"
        style={{ width: "13px", height: "13px" }}
      />
      {content}
    </CardDiv>
  );
}
