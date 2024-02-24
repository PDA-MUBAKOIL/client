import React from 'react';
import styled from 'styled-components';
import ModalCard, { ModalProps } from './ModalCard';

const OutOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index:1;
`

export default function ModalContainer({ content, setIsShow }: ModalProps) {
  return (
    <>
      <OutOverlay />
      <ModalCard content={content} setIsShow={setIsShow} />
    </>
  )
}
