import React from 'react'
import cn from 'classnames'
import { Img } from 'react-image'
import { IImageProps } from './types'

const Image: React.FunctionComponent<IImageProps> = (props) => {
  const { className, alt, src, loader, unloader } = props

  return (
    <Img
      className={cn('Image', className)}
      alt={alt}
      src={src}
      loader={loader}
      unloader={unloader}
    />
  )
}

export default Image
