import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Search} from './search'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {firstName, email} = props

  return (
    <div>
      <h3>Welcome, {firstName ? firstName : email}.</h3>
      <Search />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    firstName: state.user.firstName,
    email: state.user.email
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
