import React from "react";
import { Container, Text } from "@mantine/core";
import styled from "styled-components";

export type DrinkProp = {
  url: string;
  name: string;
};

const DrinkContainer = styled(Container)`
  width: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0;
  margin: 8px 0;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 120px;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NameFont = styled(Text)`
  word-break: keep-all;
  text-align: center;
  font-size: 14px;
`;

export default function DrinkCard({ url, name }: DrinkProp) {
  return (
    <DrinkContainer>
      <ImageContainer>
        <Image src={url} alt="" />
      </ImageContainer>
      <NameFont>{name}</NameFont>
    </DrinkContainer>
  );
}
