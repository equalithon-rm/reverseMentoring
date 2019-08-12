import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Routes from '../routes'
import {Heading, Navbar, Button} from 'react-bulma-components/full'

const NavbarMenu = ({handleClick, isLoggedIn}) => (
  <Navbar className="is-light">
    <Navbar.Brand>
      <img src={require('./elevate.png')} width="150" height="80" />
    </Navbar.Brand>{' '}
    <Navbar.Burger
    //   active={open}
    //   onClick={() =>
    //     this.setState(state => {
    //       !state.open
    //     })
    //   }
    />
    {isLoggedIn ? (
      <Navbar.Menu active={open}>
        <Navbar.Container>
          <Navbar.Item>
            <Link to="/home">Home</Link>
          </Navbar.Item>

          <Navbar.Item>
            <Link to="/profile">Profile</Link>
          </Navbar.Item>

          <Navbar.Item>
            <Link to="/search">Search</Link>
          </Navbar.Item>
        </Navbar.Container>

        <Navbar.Container position="end">
          <Navbar.Item onClick={handleClick}>
            <Button>Logout</Button>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    ) : (
      <Navbar.Menu active={open}>
        <Navbar.Container position="end">
          <Navbar.Item>
            <Routes />
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
