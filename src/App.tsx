import React, { useContext } from 'react'
import cn from 'classnames'
import { ThemeContext } from './context/ThemeContext'
import { Icon, Image, Spinner } from './components'
import LandingPage from './common/LandingPage'
import bgdesign from './assets/img/design-bg.png'

function App() {
  const {
    theme: {
      appStyle: { baseCls, containerCls },
    },
  } = useContext(ThemeContext)

  return (
    <div className={cn('', baseCls)}>
      <div className='absolute inset-0'>
        <Image
          className='ml-auto'
          border={false}
          alt='alt-img'
          src={bgdesign}
          size='xxl'
          width={'100%'}
          height={'100%'}
          fit='cover'
          ratio='16:9'
          rounded='unset'
          loader={<Spinner />}
          unloader={<Icon />}
        />
      </div>
      <div className={containerCls}>
        <LandingPage />
      </div>
    </div>
  )
}

export default App
