import Colors from '@theme/Colors'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style='auto' backgroundColor={Colors.Secondary.Dark} hidden />
    </SafeAreaProvider>
  )
}
