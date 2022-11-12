import { MainStackNavigatorParamsList } from '@navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'

import { Description, Title, Caption, Button, Container } from './styles'

const ModalScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<MainStackNavigatorParamsList, 'ModalScreen'>) => {
  const { buttonText, description, isALose, title } = route.params

  const handlePlayAgain = () => navigation.reset({ index: 0, routes: [{ name: 'WelcomeScreen' }] })

  return (
    <Container>
      <Title>{title}</Title>

      <Description>{description}</Description>

      <Button isALose={isALose} onPress={handlePlayAgain}>
        <Caption>{buttonText}</Caption>
      </Button>
    </Container>
  )
}

export default ModalScreen
