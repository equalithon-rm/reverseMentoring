import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <a href="/auth/google">{displayName} with Google</a>
      <form onSubmit={handleSubmit} name={name}>
        {props.name === 'signup' ? (
          <div>
            <div>
              <label htmlFor="status">
                <small>Are you a Mentor or a Mentee?</small>
              </label>
              <input type="checkbox" name="mentorMentee" value="mentor" />{' '}
              Mentor
              <input type="checkbox" name="mentorMentee" value="mentee" />{' '}
              Mentee
            </div>
            <br />
            <div>
              <label htmlFor="skill">
                <small>What skill are you interested in?</small>
              </label>
              <input type="checkbox" name="skills" value="leadership" />{' '}
              Leadership
              <input type="checkbox" name="skills" value="strategy" /> Strategy
              <input type="checkbox" name="skills" value="sales" /> Sales
            </div>
            <br />
            <div>
              <button type="submit">Submit</button>
            </div>
            <br />
            {error && error.response && <div> {error.response.data} </div>}
          </div>
        ) : (
          false
        )}
      </form>
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

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

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
      const formName = evt.target.name
      const mentorOrMentee = evt.target.mentorMentee.value
      const skills = [...document.getElementsByName('skills')].reduce(
        (accum, el) => {
          if (el.checked) accum.push(el.value)
          return accum
        },
        []
      )
      if (formName === 'login') {
        dispatch(auth(email, password, formName))
      } else {
        dispatch(
          auth(email, password, formName, password, mentorOrMentee, skills)
        )
      }
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
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
