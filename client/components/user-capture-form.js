import React from 'react'
import axios from 'axios'
import SkillsList from './skills-list'
import {connect} from 'react-redux'
import {updateUser} from '../store/user'

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
        currentSkills: []
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
          <div>
            <label htmlFor="status">
              <small>Please Select Your Gender</small>
            </label>
            <input type="radio" name="gender" value="Male" /> Male
            <input type="radio" name="gender" value="Female" /> Female
            <input type="radio" name="gender" value="Non-binary" /> Non-binary
            <input type="radio" name="gender" value="Other" /> Other
          </div>

          <div>
            <label htmlFor="skill">
              <small>What skill are you interested in?</small>
            </label>
            {this.state.skills.length ? (
              <SkillsList
                skills={this.state.skills}
                skillType="skillsInterestedIn"
              />
            ) : (
              false
            )}
          </div>

          <div>
            <label htmlFor="status">
              <small>Enter Your Current Company</small>
            </label>
            <input type="text" name="currentCompany" />
          </div>

          <div>
            <label htmlFor="status">
              <small>Enter Your Current Position</small>
            </label>
            <input type="text" name="currentPosition" />
          </div>

          <div>
            <label htmlFor="status">
              <small>Enter Your Bio</small>
            </label>
            <textarea type="text" name="bio" />
          </div>

          <div>
            <label htmlFor="skill">
              <small>What skill do you have?</small>
            </label>
            {this.state.skills.length ? (
              <SkillsList
                skills={this.state.skills}
                skillType="currentSkills"
              />
            ) : (
              false
            )}
          </div>

          <button type="submit">Submit</button>
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
