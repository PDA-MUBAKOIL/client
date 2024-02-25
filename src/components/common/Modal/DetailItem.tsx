import React, { useEffect, useState } from 'react';
import { Card, Text, Group, rem } from '@mantine/core';
import styled from 'styled-components';
import TagButton from '../TagButton';
import FillHeart from '../../../assets/img/Modal/fill-heart.svg';
import EmptyHeart from '../../../assets/img/Modal/empty-heart.svg';

export type DetailType = {
  _id:string,
  tags: Array<string>,
  brewerId: string,
  region: string,
  capacity: string,
  imgUrl: string,
  name: string,
  materials: string,
  percent: string,
  volume: string,
  description: string,
}

type DetailProps = {
  detail: DetailType,
}

type FontType = {
  children: String;
  view: String;
}

const ImageDiv = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
`;

const Content = styled.div`
  width: 100%;
  // display: flex;
  // flex-direction: column;
  padding: 0 3px;
`;

const ContentItem = styled(Group)`
  width: 100%;
`

const TypeDiv = styled(Group)`
  width: 69px;
  justify-content: space-between;
`

const MainFont = styled(Text)`
  font-size: 20px;
  font-weight: 700;
`

const TypeFont = styled(Text)`
  font-weight: 600;
  font-size: 14px;
`

const SubFont = styled(Text)<FontType>`
  font-size: 14px;
  width: 198px;
  ${(props) =>
    props.view === 'description' && 
    `
      max-height: 125px;
      overflow-y: scroll;
    `
  }
`

const TagDiv = styled(Group)`
  margin: 20px 0;
`

export default function DetailItem({ detail }: DetailProps) {
  const { imgUrl, name, materials, percent, volume, description } = detail;

  const [isLike, setIsLike] = useState<boolean>(false);

  return (
    <>
      <ImageDiv src={imgUrl} />
      <Content>
        <MainFont>{name}</MainFont>

        <Group
          style={{ 
            flexDirection: 'column', 
            gap: rem(4),
            marginTop: rem(10),
          }}>
          <ContentItem>
            <TypeDiv>
              <TypeFont>종류</TypeFont>
              <TypeFont>|</TypeFont>
            </TypeDiv>
            <SubFont view="">탁주</SubFont>
          </ContentItem>
          <ContentItem style={{ alignItems: 'flex-start' }}>
            <TypeDiv>
              <TypeFont>원재료</TypeFont>
              <TypeFont>|</TypeFont>
            </TypeDiv>
            <SubFont view=''>{materials}</SubFont>
          </ContentItem>
          <ContentItem>
            <TypeDiv>
              <TypeFont>도수</TypeFont>
              <TypeFont>|</TypeFont>
            </TypeDiv>
            <SubFont view=''>{percent}</SubFont>
          </ContentItem>
          <ContentItem>
            <TypeDiv>
              <TypeFont>용량</TypeFont>
              <TypeFont>|</TypeFont>
            </TypeDiv>
            <SubFont view=''>{volume}</SubFont>
          </ContentItem>
          <ContentItem style={{ alignItems: 'flex-start' }}>
            <TypeDiv>
              <TypeFont>소개</TypeFont>
              <TypeFont>|</TypeFont>
            </TypeDiv>
            <SubFont view='description'>{description}</SubFont>
          </ContentItem>
        </Group>

        <TagDiv>
          <TagButton text='보쌈' onClick={() => console.log('태그 클릭')} />
          <TagButton text='김치찜' onClick={() => console.log('태그 클릭')} />
          <TagButton text='튀김' onClick={() => console.log('태그 클릭')} />
        </TagDiv>

      </Content>
      {isLike ? (
        <img 
          src={FillHeart} 
          alt="" 
          style={{ width: '24px' }}
          onClick={() => setIsLike(false)}
        />
      ) : (
        <img 
          src={EmptyHeart} 
          alt="" 
          style={{ width: '24px' }} 
          onClick={() => setIsLike(true)}
        />
      )}
    </>
  )
}
