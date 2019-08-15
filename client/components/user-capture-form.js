import React from 'react'
import axios from 'axios'
import SkillsList from './skills-list'
import {connect} from 'react-redux'
import {updateUser} from '../store/user'
import history from '../history'

class UserCaptureForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: [],
      form: {
        gender: '',
        skillsInterestedIn: [],
        currentCompany: '',
        currentPosition: '',
        bio: '',
        currentSkills: [],
        calendlyUsername: ''
      }
    }
  }

  async componentDidMount() {
    const {data} = await axios.get('/api/skills')
    this.setState({skills: data})
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.props.updateUser(this.props.user.id, this.state.form)
    history.push('/profile')
  }

  handleChange = evt => {
    if (
      evt.target.name === 'skillsInterestedIn' ||
      evt.target.name === 'currentSkills'
    ) {
      const skillArr = this.state.form[evt.target.name]
      if (evt.target.checked) {
        skillArr.push(evt.target.id)
        this.setState({
          form: {...this.state.form, [evt.target.name]: [...skillArr]}
        })
      } else {
        const removeArr = skillArr.filter(el => el !== evt.target.value)
        this.setState({
          form: {...this.state.form, [evt.target.name]: [...removeArr]}
        })
      }
    } else {
      this.setState({
        form: {...this.state.form, [evt.target.name]: evt.target.value}
      })
    }
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="field" htmlFor="status">
            <label className="label">Please Select Your Gender:</label>
            <div className="control">
              <p>
                <input type="radio" name="gender" value="Female" />Female
              </p>
              <p>
                <input type="radio" name="gender" value="Male" />Male
              </p>
              <p>
                <input type="radio" name="gender" value="Non-binary" />Non-binary
              </p>
              <p>
                <input type="radio" name="gender" value="Other" />Other
              </p>
            </div>
          </div>

          <div className="field" htmlFor="skill">
            <label className="label">
              What skill(s) are you interested in?
            </label>
            <div className="control">
              {this.state.skills.length ? (
                <SkillsList
                  skills={this.state.skills}
                  skillType="skillsInterestedIn"
                />
              ) : (
                false
              )}
            </div>
          </div>

          <div className="field" htmlFor="status">
            <label className="label">Enter Your Current Company:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="currentCompany"
                placeholder="Current Company"
              />
            </div>
          </div>

          <div className="field" htmlFor="status">
            <label className="label">Enter Your Current Position:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="currentPosition"
                placeholder="Current Position"
              />
            </div>
          </div>

          <div className="field" htmlFor="status">
            <label className="label">
              Enter Your Calendly Username: (Optional)
            </label>
            <div className="control">
              <div>
                <div>
                  {'https://calendly.com/ '}
                  <input
                    className="input"
                    type="text"
                    name="calendlyUsername"
                    placeholder="USERNAME"
                  />
                </div>
                <div>
                  Don't Have a Calendly Account?{' '}
                  <a
                    href="https://calendly.com/signup"
                    alt="Calendly Sign Up"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign Up For Free!
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="field-body" htmlFor="status">
            <div className="field">
              <label className="label">Enter Your Bio:</label>
              <div className="control">
                <textarea
                  className="textarea"
                  type="text"
                  name="bio"
                  placeholder="Tell us about yourself."
                />
              </div>
            </div>
          </div>

          <div className="field" htmlFor="skill">
            <label className="label">What skill(s) do you have?</label>
            <div className="control">
              {this.state.skills.length ? (
                <SkillsList
                  skills={this.state.skills}
                  skillType="currentSkills"
                />
              ) : (
                false
              )}
            </div>
          </div>

          <div className="field is-grouped">
            <p className="control">
              <button className="button is-success" type="submit">
                Submit
              </button>
            </p>
          </div>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    updateUser: (userId, formData) => dispatch(updateUser(userId, formData))
  }
}

export default connect(mapState, mapDispatch)(UserCaptureForm)
