import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Heading, Navbar, Button} from 'react-bulma-components/full'

const NavbarMenu = ({handleClick, isLoggedIn}) => (
  <Navbar>
    <Navbar.Brand>
      <Navbar.Item>
        <Heading size={2}>Equalithon</Heading>
      </Navbar.Item>
    </Navbar.Brand>

    {isLoggedIn ? (
      <Navbar.Menu>
        <Navbar.Container position="end">
          <Navbar.Item>
            <Link to="/home">Home</Link>
          </Navbar.Item>

          <Navbar.Item>
            <Link to="/profile">Profile</Link>
          </Navbar.Item>

          <Navbar.Item onClick={handleClick}>
            <Button>Logout</Button>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    ) : (
      <Navbar.Menu>
        <Navbar.Container position="end">
          <Navbar.Item>
            <Link to="/login">Login</Link>
          </Navbar.Item>

          <Navbar.Item>
            <Link to="/signup">Sign Up</Link>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    )}
  </Navbar>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(NavbarMenu)

/**
 * PROP TYPES
 */
NavbarMenu.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
