import Card, { CardProps } from '@components/molecules/Card'
import { Swipeable, SwipeHandler } from '@components/organisms/Swipeable/Swipeable'
import React, { useCallback, useRef, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'

import { AmountText, Container, HappinessText, HeaderContainer } from './styles'

const GameScreen = () => {
  const [cards, setCards] = useState([
    {
      happiness: 10,
      image: require('../../../assets/MockCard.png'),
      price: 120,
      title: 'Comprar uma 1',
      id: 0,
    },
    {
      happiness: 5,
      image: require('../../../assets/MockCard.png'),
      price: 80,
      title: 'Comprar uma 2',
      id: 1,
    },
  ])
  const [happiness, setHappiness] = useState(100)
  const [amount, setAmount] = useState('R$ 100,00')
  const scale = useSharedValue(0)
  const onSwipe = useCallback(() => {
    setCards(cards.slice(0, cards.length - 1))
  }, [cards])
  const topCard = useRef<SwipeHandler>(null)

  return (
    <Container>
      {/* <HeaderContainer>
        <AmountText>{amount}</AmountText>
        <HappinessText>{happiness}%</HappinessText>
      </HeaderContainer> */}
      {cards.map((card, index) => {
        const onTop = index === cards.length - 1
        const ref = onTop ? topCard : null
        return (
          <Swipeable
            ref={ref}
            key={card.id}
            card={card}
            scale={scale}
            onSwipe={onSwipe}
            onTop={onTop}
          />
        )
      })}
    </Container>
  )
}

export default GameScreen
