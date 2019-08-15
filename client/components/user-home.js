import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import UserCaptureForm from './user-capture-form'
import {FooterBar} from '../components'
import {Section, Hero, Heading} from 'react-bulma-components/full'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {firstName, email, hasCompletedSignup} = props

  return (
    <div>
      <Hero size="fullheight">
        <Hero.Head renderAs="header">
          <Heading className="hero-title" size={1}>
            Welcome, {firstName ? firstName : email}.
            {hasCompletedSignup ? false : <UserCaptureForm />}
          </Heading>
        </Hero.Head>
      </Hero>
      <FooterBar />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    firstName: state.user.firstName,
    email: state.user.email,
    hasCompletedSignup: state.user.hasCompletedSignup
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  firstName: PropTypes.string,
  email: PropTypes.string
}
