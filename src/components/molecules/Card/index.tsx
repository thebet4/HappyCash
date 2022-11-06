import { SwipeHandler } from '@components/organisms/Swipeable/Swipeable'
import Colors from '@theme/Colors'
import React, { Ref } from 'react'
import { Dimensions } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated'
import { red } from 'react-native-redash'

import {
  CardImage,
  CardInfos,
  CardTitle,
  ChoiceButton,
  ChoiceButtonsContainer,
  Container,
  Wrapper,
} from './styles'

export type CardInfos = {
  id: number
  image: number
  title: string
  happiness: number
  price: number
}

export type CardProps = {
  card: CardInfos
  translateX: Animated.SharedValue<number>
  translateY: Animated.SharedValue<number>
  scale: Animated.SharedValue<number>
  onTop: boolean
}

const { width, height } = Dimensions.get('window')
export const α = Math.PI / 12

const Card = ({ card, onTop, scale, translateX, translateY }: CardProps) => {
  const x = useDerivedValue(() => (onTop ? translateX.value : 0))
  const container = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      {
        rotate: `${interpolate(
          x.value,
          [-width / 2, 0, width / 2],
          [α, 0, -α],
          Extrapolate.CLAMP
        )}rad`,
      },
      { scale: onTop ? 1 : scale.value },
    ],
  }))
  return (
    <Animated.View style={[container]}>
      <Wrapper>
        <Container>
          <CardImage source={card.image} />
          <CardTitle>{card.title}</CardTitle>
          <CardInfos>Felicidade: +{card.happiness}%</CardInfos>
          <CardInfos>Dinheiro: - R${card.price}</CardInfos>

          <ChoiceButtonsContainer>
            <ChoiceButton />
            <ChoiceButton
              style={{
                backgroundColor: Colors.Primary.Green,
              }}
            />
          </ChoiceButtonsContainer>
        </Container>
      </Wrapper>
    </Animated.View>
  )
}

export default Card
