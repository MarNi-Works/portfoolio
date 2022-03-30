import React, { useContext } from 'react'
import cn from 'classnames'
import { IButtonProps } from './types'
import { ThemeContext } from '../../context/ThemeContext'

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const { className, children, color = 'primary', label } = props

  const {
    theme: {
      buttonStyles: { baseCls, colorCls },
    },
  } = useContext(ThemeContext)

  return (
    <button className={cn('Button', baseCls, colorCls[color], className)}>
      {label || children}
    </button>
  )
}

export default Button
