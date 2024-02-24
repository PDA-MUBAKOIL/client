import React from 'react';
import { Button, rem } from '@mantine/core';

type TagProp = {
  text: string;
  onClick: () => void;
}

export default function TagButton({ text, onClick }: TagProp) {
  return (
    <Button
      style={{ 
        paddingLeft: rem('25px'), 
        paddingRight: rem('25px'),
        backgroundColor: '#DFBBBB',
        color: '#000',
        fontSize: rem('12px'),
        fontWeight: rem(400),
        borderRadius: rem('10px'),
        border: 'solid 1px #C17878'
      }}
      onClick={onClick}
    >
      #{text}
    </Button>
  )
}
