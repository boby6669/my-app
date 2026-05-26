import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router/ui'

const _layout = () => {
  return (
    <Tabs> 
        <Tabs.screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="about" options={{ title: "About" }} />
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  )
}

export default _layout