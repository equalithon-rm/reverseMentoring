import React from 'react'
import axios from 'axios'
import SkillsList from './skills-list'

// const getSkills = async () => {
//   const {data} = await axios.get('/api/skills')
//   return data
// }
// getSkills()

class UserCaptureForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: []
    }
  }

  async componentDidMount() {
    const {data} = await axios.get('/api/skills/array')
    this.setState({skills: data})
  }

  handleSubmit = evt => {
    evt.preventDefault()
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="status">
              <small>Please Select Your Gender</small>
            </label>
            <input type="checkbox" name="gender" value="male" /> Male
            <input type="checkbox" name="gender" value="female" /> Female
            <input type="checkbox" name="gender" value="other" /> Other
          </div>

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
            <input type="checkbox" name="skills" value="leadership" />{' '}
            Leadership
            <input type="checkbox" name="skills" value="strategy" /> Strategy
            <input type="checkbox" name="skills" value="sales" /> Sales
          </div>

          <div>
            <label htmlFor="status">
              <small>Enter Your Current Company</small>
            </label>
            <input type="text" name="company" />
          </div>

          <div>
            <label htmlFor="status">
              <small>Enter Your Current Position</small>
            </label>
            <input type="text" name="position" />
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
              <SkillsList skills={this.state.skills} />
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

export default UserCaptureForm
