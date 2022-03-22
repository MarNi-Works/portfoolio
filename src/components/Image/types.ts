import { ImgProps } from 'react-image';
import { Colors } from '../../utils/common_enums';

export interface IImageProps extends ImgProps {
  className?: string
  border?: boolean
  fit?: 'contain' | 'cover'
  size?: 'xxs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xxl'
  rounded?: 'unset' | 'rounded' | 'full'
  ratio?: '1:1' | '3:2' | '4:3' | '8:5' | '16:9'
  width?: string | number
  height?: string | number
  background?: keyof typeof Colors
}