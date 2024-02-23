import React from 'react'

export default function CardList(cardList:{title: string, list: never[]}) {
  return (
    <div>
      <div>{cardList.title}</div>
      <div></div>
    </div>
  )
}
