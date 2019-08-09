import React from 'react'

import {HeroBanner, NavbarMenu} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <NavbarMenu />
      <HeroBanner />
      <Routes />
    </div>
  )
}

export default App
