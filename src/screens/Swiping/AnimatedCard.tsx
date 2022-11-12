import { Card } from '@components/molecules'
import * as React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated'

export interface CardModel {
  id: number
  title: string
  happiness: number
  price: number
  profile: number
}

const { width } = Dimensions.get('window')
export const α = Math.PI / 12

interface CardProps {
  card: CardModel
  translateX: Animated.SharedValue<number>
  translateY: Animated.SharedValue<number>
  scale: Animated.SharedValue<number>
  onTop: boolean
}

export const AnimatedCard = ({ card, translateX, translateY, onTop, scale }: CardProps) => {
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
    <Animated.View style={[StyleSheet.absoluteFill, container]}>
      <Card
        happiness={card.happiness}
        price={card.price}
        profile={card.profile}
        title={card.title}
      />
    </Animated.View>
  )
}
