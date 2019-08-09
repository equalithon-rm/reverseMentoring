import React from 'react'

import {NavbarMenu} from './components'
import Routes from './routes'
import {Button} from 'react-bulma-components/full'

const App = () => {
  return (
    <div>
      <NavbarMenu />
      <Routes />
    </div>
  )
}

export default App
