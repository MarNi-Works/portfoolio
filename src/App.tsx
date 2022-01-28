import React, { useContext } from 'react'
import cn from 'classnames'
import { ThemeContext } from './context/ThemeContext'
import profileImage from './assets/img/MarnienCueva.png'
import { Icon, Image, Spinner } from './components'
import LandingPage from './common/LandingPage'

function App() {
  const {
    theme: {
      appStyle: { baseCls, overlayCls, overlayDesignCls, containerCls },
    },
  } = useContext(ThemeContext)

  return (
    <div className={cn('', baseCls)}>
      <div className={overlayCls}>
        <div className={overlayDesignCls}></div>
      </div>
      <div className={containerCls}>
        <LandingPage />
      </div>
      {/* <h1>Hello World, MarNi!</h1>
      <Image
        className='w-24 h-24'
        src={'s'}
        // src={profileImage}
        loader={<Spinner />}
        unloader={<Icon />}
      /> */}
    </div>
  )
}

export default App
