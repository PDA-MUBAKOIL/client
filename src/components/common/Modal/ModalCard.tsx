import React, { ReactElement } from 'react';
import { Card } from '@mantine/core';
import styled from 'styled-components';
import Quit from '../../../assets/img/Modal/quit.svg';

export type ModalProps = {
  content: ReactElement;
  setIsShow: (state: boolean) => void;
}

const CardDiv = styled(Card)`
  width: 324px;
  max-height: 598px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
`

export default function ModalCard({ content, setIsShow }: ModalProps) {
  return (
    <CardDiv>
      <img onClick={() => setIsShow(false)} src={Quit} alt='닫는 아이콘' style={{ width: '13px', height: '13px' }} />
      {content}
    </CardDiv>
  )
}
