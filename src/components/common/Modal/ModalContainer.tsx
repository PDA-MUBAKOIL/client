import React from 'react';
import styled from 'styled-components';
import ModalCard, { ModalProps } from './ModalCard';

const OutOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`

export default function ModalContainer({ content }: ModalProps) {
  return (
    <>
      <OutOverlay />
      <ModalCard content={content} />
    </>
  )
}
