import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import { useDimensions } from 'Layout'

const App = ({ dimensions }) => {
  const { width, height, orientation } = dimensions
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Window Width: {width}</Text>
      <Text style={styles.text}>Window Height: {height}</Text>
      <Text style={styles.text}>Device Orientation: {orientation}</Text>
    </View>
  )
}

export default useDimensions(App)
