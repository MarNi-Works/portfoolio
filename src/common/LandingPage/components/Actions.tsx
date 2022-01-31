import React, { useContext } from 'react'
import cn from 'classnames'
import { Button } from '../../../components'

interface IProps {
  className?: string
}

const Actions: React.FunctionComponent<IProps> = (props) => {
  const { className } = props

  return (
    <div className={cn('actions', className)}>
      <Button label='Hire Me' />
      <Button label='Portfolio' />
    </div>
  )
}

export default Actions
