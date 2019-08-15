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
        <section className="section has-background">
          <div className="container">
            <div className="columns">
              <div className="column">
                <br />
                <br />
                <br />
                <br />
                <br />

                {/* drop down start */}

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
                    <h1 className="title is-2 has-text-centered ">
                      Choose a skill
                    </h1>
                  </label>
                  <br />

                  <div className="field">
                    <div className="control">
                      <div className="select is-info">
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
                      </div>
                    </div>
                  </div>
                  <button
                    className="button is-info is-active"
                    onSubmit={this.handleSubmit}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>

                {/* dropdown end */}
              </div>

              <div className="column">
                <figure className="image center">
                  <img src="/img/mentoring.png" className="mentoringImg" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        {/* form ends here */}

        <section className="section has-background-white">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="notification is-info">
                  <ul className="flex-container flex-containee">
                    <li>
                      <h1 className="title is-size-4 has-text-centered has-text-brown">
                        Employees seeking mentoring in selected skill:
                      </h1>
                    </li>
                    <br />

                    {allUsersThatWantSelectedSkill ? (
                      allUsersThatWantSelectedSkill.length ? (
                        allUsersThatWantSelectedSkill.map((curUser, idx) => {
                          return (
                            <SearchCardList
                              key={idx}
                              curUser={curUser}
                              currentUser={this.props.currentUser}
                            />
                          )
                        })
                      ) : (
                        <li
                          className="flex-containee"
                          style={{textAlign: 'center'}}
                        >
                          No users were found for the selected skill.
                        </li>
                      )
                    ) : (
                      <li
                        className="flex-containee"
                        style={{textAlign: 'center'}}
                      >
                        Please select a skill and submit.
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="column">
                <div className="notification is-info">
                  <ul className="flex-container flex-containee">
                    <li>
                      <h1 className="title is-size-4 has-text-centered has-text-brown">
                        Employees offering mentoring in selected skill:
                      </h1>
                    </li>
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
                        <li
                          className="flex-containee"
                          style={{textAlign: 'center'}}
                        >
                          No users were found for the selected skill.
                        </li>
                      )
                    ) : (
                      <li
                        className="flex-containee"
                        style={{textAlign: 'center'}}
                      >
                        Please select a skill and submit.
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allSkills: state.skillsReducer.allSkills,
  allUsersThatWantSelectedSkill: state.skillsReducer.skillUserWants,
  allUsersThatHaveSelectedSkill: state.skillsReducer.skillUserHas,
  currentUser: state.user
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
