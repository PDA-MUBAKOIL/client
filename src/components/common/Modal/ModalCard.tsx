import React, { ReactElement } from "react";
import { Card } from "@mantine/core";
import styled from "styled-components";
import Quit from "../../../assets/img/Modal/quit.svg";
import Back from '../../../assets/img/Modal/back.svg';
import { useAppDispatch, useAppSelector } from "../../../lib/hooks/reduxHooks";
import { setIsDetail, setIsShow } from "../../../store/reducers/Drink/showModal";
import { RootState } from "../../../store/store";
import { setPage } from "../../../store/reducers/Modal/page";

export type ModalProps = {
  content: ReactElement;
};

const CardDiv = styled(Card)`
  width: 324px;
  // height: 622px;
  // min-width: 304px;
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

const IconDiv = styled.div` 
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export default function ModalCard({ content }: ModalProps) {
  const dispatch = useAppDispatch();
  const modalPage = useAppSelector((state: RootState) => state.modalPage);

  return (
    <CardDiv>
      {modalPage.page === 1 ? (
        <IconDiv>
          <img
            onClick={() => {
              dispatch(setIsDetail(false))
              dispatch(setPage(0))}
            }
            src={Back}
            alt="뒤로가기 아이콘"
            style={{ width: "13px", height: "13px" }}
          />
          <img
            onClick={() => dispatch(setIsShow(false))}
            src={Quit}
            alt="닫는 아이콘"
            style={{ width: "13px", height: "13px" }}
          />
        </IconDiv>
      ) : (
        <img
          onClick={() => dispatch(setIsShow(false))}
          src={Quit}
          alt="닫는 아이콘"
          style={{ width: "13px", height: "13px" }}
        />
      )
      }
      {content}
    </CardDiv>
  );
}
