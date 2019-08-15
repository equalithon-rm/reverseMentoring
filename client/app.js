import React from 'react'

import {NavbarMenu, FooterBar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <NavbarMenu />
      <Routes />
      <FooterBar />
    </div>
  )
}

export default App
