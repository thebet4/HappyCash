import IIconProps from '@utils/interfaces/Icons'
import React from 'react'
import { Svg, Path } from 'react-native-svg'

export default function RatingIcon({ color = '#FFFFFF', ...props }: IIconProps) {
  return (
    <Svg fill={color} {...props}>
      <Path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z' />
    </Svg>
  )
}
