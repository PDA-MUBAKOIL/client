import React, { useEffect } from "react";
import styled from "styled-components";
import ModalCard, { ModalProps } from "./ModalCard";

const OutOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

export default function ModalContainer({ content }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <OutOverlay />
      <ModalCard content={content} />
    </>
  );
}
