import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
  getSkillsThunkCreator,
  getSkillsUserWantsThunkCreator
} from '../store/skillsListReducer'

export class Search extends Component {
  constructor() {
    super()
    this.state = {
      selectedSkillId: 1
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    console.log('this.props in the componentDidMount: ', this.props)
    this.props.getSkillsThunk()
  }

  handleChange(event) {
    console.log('event.target.id: ', event.target.id)
    console.log('event.target.value: ', event.target.value)
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit(event) {
    console.log('event.target.id: ', event.target.id)
    console.log('event.target.value: ', event.target.value)
    event.preventDefault()
    this.props.getSkillsUserWantsThunk(this.state.selectedSkillId)
  }

  render() {
    console.log(
      'this.props.allSkills in the render method: ',
      this.props.allSkills
    )
    console.log(
      'this.props.allUsersThatWantSelectedSkill.users in the render method: ',
      this.props.allUsersThatWantSelectedSkill.users
    )

    return (
      <div>
        {/* <input type="text" placeholder="Search..." /> */}
        <br />
        <br />
        <div>
          <form onSubmit={this.handleSubmit} type="submit">
            <label htmlFor="selectedSkillId">Please choose a skill:</label>
            <br />
            <select id="selectedSkillId" required onChange={this.handleChange}>
              <option value="" disabled>
                --Please choose an option--
              </option>

              {this.props.allSkills.length
                ? this.props.allSkills.map(curSkill => (
                    <option key={curSkill.id} value={curSkill.id}>
                      {curSkill.name}
                    </option>
                  ))
                : null}
            </select>
            <br />
            <br />
            <button onSubmit={this.handleSubmit} type="submit">
              Submit
            </button>
          </form>
        </div>
        <br />
        <ul>
          {this.props.allUsersThatWantSelectedSkill.users ? (
            this.props.allUsersThatWantSelectedSkill.users.length ? (
              this.props.allUsersThatWantSelectedSkill.users.map(curUser => (
                <li key={curUser.id}>{curUser.fullName}</li>
              ))
            ) : (
              <li>No users were found for the selected skill.</li>
            )
          ) : (
            <li>Please select a skill and submit.</li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allSkills: state.skillsReducer.allSkills,
  allUsersThatWantSelectedSkill: state.skillsReducer.skillUserWants
})

const mapDispatchToProps = dispatch => ({
  getSkillsThunk() {
    dispatch(getSkillsThunkCreator())
  },
  getSkillsUserWantsThunk(skillId) {
    dispatch(getSkillsUserWantsThunkCreator(skillId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
