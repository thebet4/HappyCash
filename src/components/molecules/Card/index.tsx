import Colors from '@theme/Colors'
import React from 'react'

import {
  CardImage,
  CardInfos,
  CardTitle,
  ChoiceButton,
  ChoiceButtonsContainer,
  Container,
  Wrapper,
} from './styles'

export type CardProps = {
  image: number
  title: string
  happiness: number
  price: number
  AgreeWithCard: () => void
}

const Card = ({ happiness, image, price, title, AgreeWithCard }: CardProps) => {
  return (
    <Wrapper>
      <Container>
        <CardImage source={image} />
        <CardTitle>{title}</CardTitle>
        <CardInfos>Felicidade: +{happiness}%</CardInfos>
        <CardInfos>Dinheiro: - R${price}</CardInfos>

        <ChoiceButtonsContainer>
          <ChoiceButton />
          <ChoiceButton
            onPress={AgreeWithCard}
            style={{
              backgroundColor: Colors.Primary.Green,
            }}
          />
        </ChoiceButtonsContainer>
      </Container>
    </Wrapper>
  )
}

export default Card
