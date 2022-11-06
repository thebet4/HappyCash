import { Card } from '@components/molecules'
import { CardInfos, α } from '@components/molecules/Card'
import type { Ref } from 'react'
import React, { forwardRef, useImperativeHandle } from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import type { PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  event,
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { snapPoint } from 'react-native-redash'

const { width, height } = Dimensions.get('window')

const A = Math.round(width * Math.cos(α) + height * Math.sin(α))
const snapPoints = [-A, 0, A]

export interface SwipeHandler {
  swipeLeft: () => void
  swipeRight: () => void
}

interface SwiperProps {
  onSwipe: () => void
  card: CardInfos
  scale: Animated.SharedValue<number>
  onTop: boolean
}

const swipe = (
  translateX: Animated.SharedValue<number>,
  dest: number,
  velocity: number,
  cb: () => void
) => {
  'worklet'
  translateX.value = withSpring(
    dest,
    {
      velocity,
      overshootClamping: dest === 0 ? false : true,
      restSpeedThreshold: dest === 0 ? 0.01 : 100,
      restDisplacementThreshold: dest === 0 ? 0.01 : 100,
    },
    () => {
      if (dest !== 0) {
        runOnJS(cb)()
      }
    }
  )
}

export const Swipeable = forwardRef(
  ({ onSwipe, card, scale, onTop }: SwiperProps, ref: Ref<SwipeHandler>) => {
    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)

    useImperativeHandle(ref, () => ({
      swipeLeft: () => {
        swipe(translateX, -A, 5, onSwipe)
      },
      swipeRight: () => {
        swipe(translateX, A, 5, onSwipe)
      },
    }))

    const onGestureEvent = useAnimatedGestureHandler({
      onStart: () => {
        console.log('START')
      },
      onActive: () => {
        console.log('ACTIVE')
      },
      onEnd: () => {
        console.log('END')
      },
      // onStart: (event, ctx) => {
      //   console.log('START')
      //   ctx.offsetX = translateX.value
      //   ctx.offsetY = translateY.value
      // },
      // onActive: ({ translationX, translationY }, { x, y }) => {
      //   translateX.value = x + translationX
      //   translateY.value = y + translationY
      //   scale.value = interpolate(
      //     translateX.value,
      //     [-width / 4, 0, width / 4],
      //     [1, 0.95, 1],
      //     Extrapolate.CLAMP
      //   )
      // },
      // onEnd: ({ velocityX, velocityY }) => {
      //   const dest = snapPoint(translateX.value, velocityX, snapPoints)
      //   swipe(translateX, dest, 5, onSwipe)
      //   translateY.value = withSpring(0, { velocity: velocityY })
      // },
    })

    return (
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View>
          <Card
            card={card}
            translateX={translateX}
            translateY={translateY}
            scale={scale}
            onTop={onTop}
          />
        </Animated.View>
      </PanGestureHandler>
    )
  }
)
