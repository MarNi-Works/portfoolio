import React, { useContext } from 'react'
import cn from 'classnames'
import { ILandingPageProps } from './types'
import { ThemeContext } from '../../context/ThemeContext'
import { Icon, Image, Spinner } from '../../components'
import profileImage from '../../assets/img/MarnienCueva2.png'

const LandingPage: React.FunctionComponent<ILandingPageProps> = (props) => {
  const { className } = props

  const {
    theme: {
      landingPageStyle: {
        baseCls,
        sectionCls,
        leftContainerCls,
        rightContainerCls,
      },
    },
  } = useContext(ThemeContext)

  return (
    <div className={cn('Landing', baseCls, className)}>
      <div className={sectionCls}>
        <div className={leftContainerCls}>
          <p className='text-3xl '>Hi, I am</p>
          <p>Marnien Cueva</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            sint saepe molestiae perspiciatis aspernatur ullam, dolores ipsa
            beatae pariatur debitis? Enim nihil quam quaerat velit quas,
            assumenda veritatis quis repellendus.
          </p>
          <div>
            <button>Hire me</button>
            <button>Portfolio</button>
          </div>
        </div>
      </div>
      <div className={sectionCls}>
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
