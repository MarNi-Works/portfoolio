import React, { useContext } from 'react'
import cn from 'classnames'
import { ILandingPageProps } from './types'
import { ThemeContext } from '../../context/ThemeContext'
import { Actions } from './components'
import { Icon, Image, Spinner } from '../../components'
import profileImage from '../../assets/img/MarnienCueva2.png'
// data
import mock_data from './mock_data'

const LandingPage: React.FunctionComponent<ILandingPageProps> = (props) => {
  const { className, data = mock_data } = props
  console.log(
    '%c 🍰 data: ',
    'font-size:20px;background-color: #42b983;color:#fff;',
    data
  )

  const {
    theme: {
      landingPageStyle: {
        baseCls,
        leftSectionCls,
        rightSectionCls,
        leftContainerCls,
        rightContainerCls,
      },
    },
  } = useContext(ThemeContext)

  // const { greeting, name, alt, image, description, actions } = mock_data ?? {}

  return (
    <div className={cn('Landing', baseCls, className)}>
      <div className={leftSectionCls}>
        <div className={leftContainerCls}>
          <p className='text-5xl text-white'>Hi, I am</p>
          <p className='text-7xl text-emerald-500 font-bold'>Marnien Cueva</p>
          <p className='text-lg text-white pr-16'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            sint saepe molestiae perspiciatis aspernatur ullam, dolores ipsa
            beatae pariatur debitis? Enim nihil quam quaerat velit quas,
            assumenda veritatis quis repellendus.
          </p>
          <Actions />
        </div>
      </div>
      <div className={rightSectionCls}>
        <div className={rightContainerCls}>
          <Image
            className='w-full h-full object-cover object-top'
            src={profileImage}
            loader={<Spinner />}
            unloader={<Icon />}
          />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
