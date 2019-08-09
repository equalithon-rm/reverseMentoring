import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Heading, Navbar} from 'react-bulma-components/full'

const NavbarMenu = ({handleClick, isLoggedIn}) => (
  <div>
    <Navbar.Brand>
      <Navbar.Item>
        <Heading>Equalithon</Heading>
      </Navbar.Item>
    </Navbar.Brand>

    <Navbar.Menu>
      <Navbar.Container>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Navbar.Item>
              <Link to="/home">Home</Link>
            </Navbar.Item>

            <Navbar.Item>
              <Link to="/profile">Profile</Link>
            </Navbar.Item>

            <Navbar.Item>
              <Link to="/bookings">Bookings</Link>
            </Navbar.Item>

            <Navbar.Item>
              <a href="#" onClick={handleClick}>
                Logout
              </a>
            </Navbar.Item>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Navbar.Item href="/login">Login</Navbar.Item>

            <Navbar.Item href="/signup">Sign Up</Navbar.Item>
          </div>
        )}
      </Navbar.Container>
    </Navbar.Menu>
    <hr />
  </div>
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
