import Colors from '@theme/Colors'
import React from 'react'

import {
  AmountText,
  CardContainer,
  CardImage,
  CardInfos,
  CardTitle,
  ChoiceButton,
  ChoiceButtonsContainer,
  Container,
  GameContent,
  HappinessText,
  HeaderContainer,
} from './styles'

const GameScreen = () => {
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

  return (
    <Container>
      <HeaderContainer>
        <AmountText>R$100,00</AmountText>
        <HappinessText>100%</HappinessText>
      </HeaderContainer>

      <GameContent horizontal>
        <CardContainer>
          <CardImage source={require('../../../assets/MockCard.png')} />
          <CardTitle>Comprar uma bicicleta</CardTitle>
          <CardInfos>Felicidade: +24%</CardInfos>
          <CardInfos>Dinheiro: - R$150,00</CardInfos>

          <ChoiceButtonsContainer>
            <ChoiceButton />
            <ChoiceButton
              style={{
                backgroundColor: Colors.Primary.Green,
              }}
            />
          </ChoiceButtonsContainer>
        </CardContainer>
      </GameContent>
    </Container>
  )
}

export default GameScreen
