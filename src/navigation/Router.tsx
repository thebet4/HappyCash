import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ModalScreen from '@screens/Modal'
import { Swiping } from '@screens/Swiping'
import TutorialScreen from '@screens/Tutorial'
import { WelcomeScreen } from '@screens/Welcome'
import React from 'react'

import { MainStackNavigatorParamsList } from './types'

const Router = () => {
  const Stack = createNativeStackNavigator<MainStackNavigatorParamsList>()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
      <Stack.Screen name='GameScreen' component={Swiping} />
      <Stack.Screen name='TutorialScreen' component={TutorialScreen} />
      <Stack.Group
        screenOptions={{
          animation: 'slide_from_bottom',
        }}
      >
        <Stack.Screen name='ModalScreen' component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default Router
