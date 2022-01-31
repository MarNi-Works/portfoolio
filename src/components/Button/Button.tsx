import React, { useContext } from 'react'
import cn from 'classnames'
import { IButtonProps } from './types'
import { ThemeContext } from '../../context/ThemeContext'

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const { className, label } = props

  const {
    theme: {
      buttonStyle: { baseCls },
    },
  } = useContext(ThemeContext)

  return <button className={cn('Button', baseCls, className)}>{label}</button>
}

export default Button
