import { Button } from '@components/atoms'
import { MainStackNavigatorParamsList } from '@navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Colors from '@theme/Colors'
import React from 'react'

import { Container, ImageContainer } from './styles'

const WelcomeScreen = ({
  navigation,
}: NativeStackScreenProps<MainStackNavigatorParamsList, 'WelcomeScreen'>) => {
  return (
    <Container>
      <ImageContainer source={require('../../../assets/WelcomeImage.png')} />
      <Button
        onPress={() => navigation.navigate('GameScreen')}
        label='Jogar'
        style={{
          backgroundColor: Colors.Primary.Green,
        }}
      />
      <Button
        label='Tutorial'
        style={{
          backgroundColor: Colors.Primary.Yellow,
        }}
        onPress={() => navigation.navigate('TutorialScreen')}
      />
    </Container>
  )
}

export default WelcomeScreen
