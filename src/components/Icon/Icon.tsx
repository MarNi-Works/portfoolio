import React from 'react'
import cn from 'classnames'
import { IIconProps } from './types'

const Icon: React.FunctionComponent<IIconProps> = (props) => {
  const { className } = props
  return <div className={cn('Icon', className)}>icon</div>
}

export default Icon
