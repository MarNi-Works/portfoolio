import React from 'react'
import cn from 'classnames'
import { ISpinnerProps } from './types'

const Spinner: React.FunctionComponent<ISpinnerProps> = (props) => {
  const { className } = props
  return <div className={cn('Spinner', className)}>spinner</div>
}

export default Spinner
