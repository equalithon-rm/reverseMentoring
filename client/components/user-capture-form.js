import React from 'react'
import axios from 'axios'
import {SkillsListName, SkillsListBox} from './skills-list'
import {connect} from 'react-redux'
import {updateUser} from '../store/user'
import history from '../history'
import {Columns, Table} from 'react-bulma-components/full'

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
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <Columns>
            <Columns.Column size={6}>
              <div className="form-content">
                <div htmlFor="status">
                  <label className="question">Please Select Your Gender</label>

                  <div className="controlRadio">
                    <input type="radio" name="gender" value="Female" /> Female
                    <input type="radio" name="gender" value="Male" /> Male
                    <input type="radio" name="gender" value="Non-binary" />
                    Non-binary
                    <input type="radio" name="gender" value="Other" /> Other
                  </div>
                </div>

                <div htmlFor="status">
                  <label>Enter Your Current Company</label>
                  <div className="control">
                    <input
                      type="text"
                      name="currentCompany"
                      placeholder="Current Company"
                    />
                  </div>
                </div>

                <div htmlFor="status">
                  <label>Enter Your Current Position</label>
                  <div className="control">
                    <input
                      type="text"
                      name="currentPosition"
                      placeholder="Current Position"
                    />
                  </div>
                </div>

                <div className="field" htmlFor="status">
                  <label>Enter Your Calendly Username: (Optional)</label>
                  <div className="control">
                    <div className="small">
                      <div>
                        {'https://calendly.com/ '}
                        <input
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

                <div htmlFor="status">
                  <div>
                    <label>Enter Your Bio</label>
                    <div className="control">
                      <textarea
                        type="text"
                        name="bio"
                        placeholder="Tell us about yourself."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Columns.Column>

            <Columns.Column className="skills">
              <label>Select your Skills</label>

              <table>
                <thead>
                  <tr>
                    <th>Skills</th>
                    <th>I am interesting in</th>
                    <th>My Skills</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.skills.length ? (
                    <td>
                      {' '}
                      <SkillsListName skills={this.state.skills} />{' '}
                    </td>
                  ) : (
                    false
                  )}

                  {this.state.skills.length ? (
                    <td>
                      <SkillsListBox
                        skills={this.state.skills}
                        skillType="skillsInterestedIn"
                      />
                    </td>
                  ) : (
                    false
                  )}

                  {this.state.skills.length ? (
                    <td>
                      <SkillsListBox
                        skills={this.state.skills}
                        skillType="currentSkills"
                      />
                    </td>
                  ) : (
                    false
                  )}
                </tbody>
              </table>

              <Columns>
                <div className="field is-grouped">
                  <p className="control">
                    <button
                      className="button learn-buttons is-danger"
                      type="submit"
                    >
                      Submit
                    </button>
                  </p>
                </div>
              </Columns>
            </Columns.Column>
          </Columns>
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
