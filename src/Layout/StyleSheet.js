import { StyleSheet, Platform } from 'react-native'

const create = styles => {
  Object.entries(styles).forEach(([key, val]) => {
    const { android = {}, ios = {} } = val
    Object.assign(val, styles[key][Platform.OS])
    delete styles[key].android
    delete styles[key].ios
  })
  return StyleSheet.create(styles)
}

export default { create }
