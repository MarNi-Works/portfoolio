import React, { useContext, useMemo } from 'react'
import cn from 'classnames'
import { Img } from 'react-image'
import { IImageProps } from './types'
import { ThemeContext } from '../../context/ThemeContext'
import { Icon, Spinner } from '../index'

const Image: React.FC<IImageProps> = (props) => {
  const {
    className,
    border = true,
    background = 'default',
    alt,
    src,
    size = 'xl',
    fit = 'cover',
    ratio = '16:9',
    rounded = 'unset',
    width,
    height,
    loader = <Spinner />,
    unloader = <Icon />,
  } = props

  const {
    theme: {
      imageStyle: {
        baseCls,
        roundedCls,
        containerCls,
        overlayCls,
        imgCls,
        fitCls,
        borderCls,
        backgroundCls,
      },
    },
  } = useContext(ThemeContext)

  // sizes
  const widthSize = useMemo(
    () => () => {
      switch (size) {
        case 'xs':
          return 96
        case 'sm':
          return 128
        case 'base':
          return 160
        case 'lg':
          return 192
        case 'xl':
          return 256
        case 'xxl':
          return 320
        // case '3xl':
        //   return 345
        // case '4xl':
        //   return 375
        // case '5xl':
        //   return 400
        // case '6xl':
        //   return 425
        // case '7xl':
        //   return 450
        // case '8xl':
        //   return 475
        // case '9xl':
        //   return 500
        default:
          return undefined
      }
    },
    [size]
  )

  // aspect ratio
  const aspectSize = useMemo(
    () => () => {
      switch (ratio) {
        case '1:1':
          return '100%'
        case '3:2':
          return '66.66%'
        case '4:3':
          return '75%'
        case '8:5':
          return '62.5%'
        case '16:9':
          return '56.25%'
        default:
          return undefined
      }
    },
    [ratio]
  )

  const ImageWrapper = ({ children }: any) => (
    <div className={containerCls} style={{ paddingTop: aspectSize() }}>
      <div className={overlayCls}>{children}</div>
    </div>
  )

  const image = (
    <Img
      className={cn(imgCls, fitCls[fit])}
      alt={alt}
      src={src}
      loader={loader}
      unloader={unloader}
    />
  )

  const viewerWidthStyles: React.CSSProperties = {
    maxWidth: width ? width : widthSize(),
    height: height ? height : undefined,
    backgroundColor: background === 'default' ? '#f7fbfd' : '',
  }

  const baseStyles = cn(
    'Image',
    baseCls,
    roundedCls[rounded],
    backgroundCls[background],
    { [borderCls]: border === true },
    className
  )

  return (
    <div className={baseStyles} style={viewerWidthStyles}>
      {!height ? <ImageWrapper>{image}</ImageWrapper> : image}
    </div>
  )
}

export default Image
