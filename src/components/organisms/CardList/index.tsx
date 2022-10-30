import Card, { CardProps } from '@components/molecules/Card'
import React, { useEffect, useRef } from 'react'
import { FlatList } from 'react-native'

type CardListProps = {
  cards: CardProps[]
  getNextCard: () => void
}

const CardList = ({ cards, getNextCard }: CardListProps) => {
  let currentIndex = -1
  const ListRef = useRef()

  useEffect(() => {
    currentIndex++
    ListRef.current.scrollToIndex({ index: currentIndex })
  }, [cards])

  const GoNextCard = () => {
    getNextCard()
  }

  return (
    <FlatList
      ref={ListRef}
      scrollEnabled={false}
      horizontal
      data={cards}
      renderItem={({ item }) => <Card {...item} AgreeWithCard={GoNextCard} />}
      keyExtractor={(item) => item.title}
    />
  )
}

export default CardList
