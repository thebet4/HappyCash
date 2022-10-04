import { BoldText } from '@theme/Fonts'
import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { Container } from './styles'

type ButtonProps = {
  onPress?: () => void
  style?: StyleProp<ViewStyle>
  label?: string
}

const Button = ({ style = {}, onPress = () => {}, label = 'click me' }: ButtonProps) => {
  return (
    <Container style={style} onPress={onPress}>
      <BoldText>{label}</BoldText>
    </Container>
  )
}

export default Button
