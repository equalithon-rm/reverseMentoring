import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {signup} from '../store'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="status">
            <small>Are you a Mentor or a Mentee?</small>
          </label>
          <input type="checkbox" name="mentorMentee" value="mentor" /> Mentor
          <input type="checkbox" name="mentorMentee" value="mentee" /> Mentee
        </div>

        <div>
          <label htmlFor="skill">
            <small>What skill are you interested in?</small>
          </label>
          <input type="checkbox" name="skills" value="leadership" /> Leadership
          <input type="checkbox" name="skills" value="strategy" /> Strategy
          <input type="checkbox" name="skills" value="sales" /> Sales
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>

      {/* <a href="/auth/google">{displayName} with Google</a> */}
      <Link to="/auth/google">{displayName} with Google</Link>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const mentorOrMentee = evt.target.mentorMentee.value
      const skills = [...document.getElementsByName('skills')].reduce(
        (accum, el) => {
          if (el.checked) {
            accum.push(el.value)
          }
          return accum
        },
        []
      )
      dispatch(signup(mentorOrMentee, skills))
    }
  }
}

export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
