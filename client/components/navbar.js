import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Login} from '../components'
import {Navbar, Button, Dropdown, Icon} from 'react-bulma-components/full'

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
      <Navbar role="navigation" aria-label="main navigation">
        <a href={isLoggedIn ? '/home' : '/'} alt="Main Page">
          <Navbar.Brand>
            <img src={require('./elevate.png')} width="160" height="160" />
          </Navbar.Brand>
        </a>

        <div className="Nav_mobile">
          <Icon className="close" onClick={this.navToggleClick}>
            {' '}
            <span className="rbc rbc-bars" />
          </Icon>
          {this.state.active ? (
            isLoggedIn ? (
              <div>
                <div className="sidenav">
                  <Icon className="close" onClick={this.navToggleClick}>
                    {' '}
                    <span>X</span>
                  </Icon>
                  <Link to="/home" onClick={this.navToggleClick}>
                    Home
                  </Link>
                  <Link to="/profile" onClick={this.navToggleClick}>
                    Profile
                  </Link>
                  <Link to="/search" onClick={this.navToggleClick}>
                    Search
                  </Link>
                  <Link to="/about" onClick={this.navToggleClick}>
                    About
                  </Link>
                  <Link to="" onClick={handleClick}>
                    Logout
                  </Link>
                </div>
              </div>
            ) : (
              <div className="sidenav">
                <div className="btnSideNav">
                  <Login />
                </div>
                <Icon className="close" onClick={this.navToggleClick}>
                  {' '}
                  <span>X</span>
                </Icon>
              </div>
            )
          ) : null}
        </div>

        {isLoggedIn ? (
          <Navbar.Menu>
            <Navbar.Container className="NavMargins">
              <Button
                to="/home"
                renderAs={Link}
                className="is-text"
                size="medium"
                style={{textDecoration: 'none'}}
              >
                Home
              </Button>

              <Button
                to="/profile"
                renderAs={Link}
                className="is-text"
                size="medium"
                style={{textDecoration: 'none'}}
              >
                Profile
              </Button>

              <Button
                to="/search"
                renderAs={Link}
                className="is-text"
                size="medium"
                style={{textDecoration: 'none'}}
              >
                Search
              </Button>

              <Button
                to="/about"
                renderAs={Link}
                className="is-text"
                size="medium"
                style={{textDecoration: 'none'}}
              >
                About
              </Button>
            </Navbar.Container>

            <Navbar.Container position="end">
              <Navbar.Item style={{height: '100px'}} backgroundColor="warning">
                <Button
                  onClick={handleClick}
                  color="dark"
                  size="medium"
                  className="button"
                >
                  Logout
                </Button>
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
