import React, { useContext } from 'react'
import cn from 'classnames'
import './App.css'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const {
    theme: {
      appStyle: { baseCls },
    },
  } = useContext(ThemeContext)

  return (
    <div className={cn('App', baseCls)}>
      <h1>Hello World, MarNi!</h1>
    </div>
  )
}

export default App
