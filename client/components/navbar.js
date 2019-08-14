import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Login} from '../components'
import {Navbar, Button, Menu} from 'react-bulma-components/full'

class NavbarMenu extends Component {
  state = {
    active: false
  }

  navToggleClick = () => {
    const {active} = this.state
    this.setState({active: !active})
  }

  render() {
    const {handleClick, isLoggedIn} = this.props
    return (
      <Navbar
        className="navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <Navbar.Brand>
          <img src={require('./elevate.png')} width="150" height="80" />
          <Navbar.Burger
            onClick={this.navToggleClick}
            active={String(this.state.active)}
          />
        </Navbar.Brand>

        {this.state.active ? (
          isLoggedIn ? (
            <Menu.List>
              <Button to="/home" renderAs={Link} color="light" size="medium">
                Home
              </Button>

              <Button to="/profile" renderAs={Link} color="light" size="medium">
                Profile
              </Button>

              <Button to="/search" renderAs={Link} color="light" size="medium">
                Search
              </Button>

              <Menu.List onClick={handleClick}>
                <Button>Logout</Button>
              </Menu.List>
            </Menu.List>
          ) : (
            <Menu.List>
              <Login />
            </Menu.List>
          )
        ) : null}

        {isLoggedIn ? (
          <Navbar.Menu>
            <Navbar.Container className="NavMargins">
              <Button to="/home" renderAs={Link} color="light" size="medium">
                Home
              </Button>

              <Button to="/profile" renderAs={Link} color="light" size="medium">
                Profile
              </Button>

              <Button to="/search" renderAs={Link} color="light" size="medium">
                Search
              </Button>
            </Navbar.Container>

            <Navbar.Container position="end">
              <Navbar.Item onClick={handleClick}>
                <Button>Logout</Button>
              </Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        ) : (
          <Navbar.Menu>
            <Navbar.Container position="end" className="NavMargins">
              <Login />
            </Navbar.Container>
          </Navbar.Menu>
        )}
      </Navbar>
    )
  }
}

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
