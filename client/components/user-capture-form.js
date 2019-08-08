import React from 'react'
import axios from 'axios'
import SkillsList from './skills-list'

class UserCaptureForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: [],
      form: {
        gender: '',
        mentorOrMentee: '',
        skillsInterestedIn: [],
        currentCompany: '',
        currentPosition: '',
        bio: '',
        currentSkills: []
      }
    }
  }

  async componentDidMount() {
    const {data} = await axios.get('/api/skills/array')
    this.setState({skills: data})
  }

  handleSubmit = async evt => {
    evt.preventDefault()
    await axios.post(`/api/${this.state.form.mentorOrMentee}`, this.state.form)
  }

  handleChange = evt => {
    if (
      evt.target.name === 'skillsInterestedIn' ||
      evt.target.name === 'currentSkills'
    ) {
      const skillArr = this.state.form[evt.target.name]
      if (evt.target.checked) {
        skillArr.push(evt.target.value)
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
            <input type="radio" name="gender" value="male" /> Male
            <input type="radio" name="gender" value="female" /> Female
            <input type="radio" name="gender" value="other" /> Other
          </div>

          <div>
            <label htmlFor="status">
              <small>Are you a Mentor or a Mentee?</small>
            </label>
            <input type="radio" name="mentorOrMentee" value="mentors" /> Mentor
            <input type="radio" name="mentorOrMentee" value="mentees" /> Mentee
          </div>

          <div>
            <label htmlFor="skill">
              <small>What skill are you interested in?</small>
            </label>
            <input
              type="checkbox"
              name="skillsInterestedIn"
              value="leadership"
            />{' '}
            Leadership
            <input
              type="checkbox"
              name="skillsInterestedIn"
              value="strategy"
            />{' '}
            Strategy
            <input
              type="checkbox"
              name="skillsInterestedIn"
              value="sales"
            />{' '}
            Sales
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
