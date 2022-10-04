import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GameScreen } from '@screens/Game'
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
      <Stack.Screen name='GameScreen' component={GameScreen} />
    </Stack.Navigator>
  )
}

export default Router
