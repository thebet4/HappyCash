import { Card } from '@components/molecules'
import { CardProps } from '@components/molecules/Card'
import { CardList } from '@components/organisms'
import React from 'react'

import { AmountText, Container, GameContent, HappinessText, HeaderContainer } from './styles'

const GameScreen = () => {
  const DATA_BASE = [
    {
      happiness: 10,
      image: require('../../../assets/MockCard.png'),
      price: 120,
      title: 'Comprar uma bicicleta',
    },
    {
      happiness: 5,
      image: require('../../../assets/MockCard.png'),
      price: 80,
      title: 'Comprar uma pizza',
    },
  ]
  const [cards, setCards] = React.useState<CardProps[]>([
    {
      happiness: 10,
      image: require('../../../assets/MockCard.png'),
      price: 120,
      title: 'Comprar uma bicicleta',
    },
  ])

  const getHappinessIcon = (happinessLevel: number) => {
    if (happinessLevel >= 75) {
      return '75'
    } else if (happinessLevel >= 50) {
      return '50'
    } else if (happinessLevel >= 25) {
      return '25'
    } else {
      return '0'
    }
  }

  const getNextCard = () => {
    setCards([...cards, DATA_BASE[1]])
  }

  return (
    <Container>
      <HeaderContainer>
        <AmountText>R$100,00</AmountText>
        <HappinessText>100%</HappinessText>
      </HeaderContainer>

      <CardList cards={cards} getNextCard={getNextCard} />
    </Container>
  )
}

export default GameScreen
