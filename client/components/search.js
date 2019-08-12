import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getSkillsThunkCreator} from '../store/skillsListReducer'

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
    this.props.signUpThunk(this.state)
  }

  render() {
    console.log('this.props in the render method: ', this.props)
    return (
      <div>
        {/* <input type="text" placeholder="Search..." /> */}
        <br />
        <br />
        <div>
          <form type="submit">
            <label htmlFor="selectedSkillId">Please choose a skill:</label>
            <br />
            <select id="selectedSkillId" required onChange={this.handleChange}>
              <option value="" disabled>
                --Please choose an option--
              </option>

              {this.props.allSkills && this.props.allSkills.length
                ? this.props.allSkills.map(curSkill => (
                    <option key={curSkill.id} value={curSkill.id}>
                      {curSkill.name}
                    </option>
                  ))
                : null}
            </select>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allSkills: state.skillsReducer.skills
})

const mapDispatchToProps = dispatch => ({
  getSkillsThunk() {
    dispatch(getSkillsThunkCreator())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
