import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
  getSkillsThunkCreator,
  getSkillsUserWantsThunkCreator,
  getSkillsUserHasThunkCreator
} from '../store/skillsListReducer'
import SearchCardList from './search-card-list'

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
    this.props.getSkillsThunk()
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.getSkillsUserWantsThunk(this.state.selectedSkillId)
    this.props.getSkillsUserHasThunk(this.state.selectedSkillId)
  }

  render() {
    let allUsersThatWantSelectedSkill = this.props.allUsersThatWantSelectedSkill
    let allUsersThatHaveSelectedSkill = this.props.allUsersThatHaveSelectedSkill
    return (
      <div className="flex-container">
        <br />
        <br />
        <div>
          <form
            onSubmit={this.handleSubmit}
            type="submit"
            className="flex-container flex-containee"
          >
            <label
              htmlFor="selectedSkillId"
              className="flex-containee"
              style={{textAlign: 'center'}}
            >
              Please choose a skill:
            </label>
            <br />
            <select
              onChange={this.handleChange}
              id="selectedSkillId"
              required
              className="flex-containee"
            >
              <option value="" disabled className="flex-containee">
                --Please choose an option--
              </option>
              {this.props.allSkills.length
                ? this.props.allSkills.map(curSkill => (
                    <option
                      key={curSkill.id}
                      value={curSkill.id}
                      className="flex-containee"
                    >
                      {curSkill.name}
                    </option>
                  ))
                : null}
            </select>
            <br />
            <button
              onSubmit={this.handleSubmit}
              type="submit"
              className="flex-containee"
            >
              Submit
            </button>
          </form>
        </div>
        <br />
        <br />

        <ul className="flex-container flex-containee">
          <li>Employees seeking mentoring in selected skill:</li>
          <br />
          {allUsersThatWantSelectedSkill ? (
            allUsersThatWantSelectedSkill.length ? (
              allUsersThatWantSelectedSkill.map((curUser, idx) => {
                return (
                  <SearchCardList
                    key={idx}
                    curUser={curUser}
                    currentUserName={this.props.currentUserName}
                  />
                )
              })
            ) : (
              <li className="flex-containee" style={{textAlign: 'center'}}>
                No users were found for the selected skill.
              </li>
            )
          ) : (
            <li className="flex-containee" style={{textAlign: 'center'}}>
              Please select a skill and submit.
            </li>
          )}
        </ul>

        <br />
        <br />
        <ul className="flex-container flex-containee">
          <li>Employees offering mentoring in selected skill:</li>
          <br />
          {allUsersThatHaveSelectedSkill ? (
            allUsersThatHaveSelectedSkill.length ? (
              allUsersThatHaveSelectedSkill.map((curUser, idx) => {
                return (
                  <SearchCardList
                    key={idx}
                    curUser={curUser}
                    currentUserName={this.props.currentUserName}
                  />
                )
              })
            ) : (
              <li className="flex-containee" style={{textAlign: 'center'}}>
                No users were found for the selected skill.
              </li>
            )
          ) : (
            <li className="flex-containee" style={{textAlign: 'center'}}>
              Please select a skill and submit.
            </li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allSkills: state.skillsReducer.allSkills,
  allUsersThatWantSelectedSkill: state.skillsReducer.skillUserWants,
  allUsersThatHaveSelectedSkill: state.skillsReducer.skillUserHas,
  currentUserName: state.user.fullName
})

const mapDispatchToProps = dispatch => ({
  getSkillsThunk() {
    dispatch(getSkillsThunkCreator())
  },
  getSkillsUserWantsThunk(skillId) {
    dispatch(getSkillsUserWantsThunkCreator(skillId))
  },
  getSkillsUserHasThunk(skillId) {
    dispatch(getSkillsUserHasThunkCreator(skillId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
