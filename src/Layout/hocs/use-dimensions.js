import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
const DIMENSIONS = {}

const useDimensions = Component => props => {
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()
  const [orientation, setOrientation] = useState()

  useEffect(() => {
    const onDimensionsChange = () => {
      const { width, height } = Dimensions.get('window')
      const orientation = width > height ? 'landscape' : 'portrait'
      setWidth(width)
      setHeight(height)
      setOrientation(orientation)
      DIMENSIONS.width = width
      DIMENSIONS.height = height
      DIMENSIONS.orientation = orientation
    }
    Dimensions.addEventListener('change', onDimensionsChange)
    onDimensionsChange()
    return () => {
      Dimensions.removeEventListener('change', onDimensionsChange)
    }
  })

  const dims = { dimensions: { width, height, orientation } }

  return <Component {...props} {...dims} />
}

const getDimensions = () => DIMENSIONS

export default useDimensions

export { getDimensions }
