import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import useDimensions from 'Layout/use-dimensions'

const App = ({ dimensions }) => {
  const { width, height, orientation } = dimensions
  return (
    <View style={styles.container}>
      <Text>Window Width: {width}</Text>
      <Text>Window Height: {height}</Text>
      <Text>Device Orientation: {orientation}</Text>
    </View>
  )
}

export default useDimensions(App)
