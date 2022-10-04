import { Router } from '@navigation/index'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Router />
        <StatusBar hidden />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
