import React, {Component} from 'react'
import {currentSkill} from '../store/skillsListReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'

export class Dashboard extends Component {
  componentDidMount() {
    //trouble grabbing the desired skill Id, so hardcoded a desired skillId
    this.props.currentSkill(1)
    // grab all users with current skill
  }

  render() {
    const {usersWithCurrentSkill} = this.props
    console.log('INFO', usersWithCurrentSkill)

    return (
      <div id="dashbaord-list">
        <h1>Dashboard List</h1>
        {/* {usersWithCurrentSkill.map(user => (
          <div key={user.id}>
          <img src={user.imgUrl}/>78tuyl.;..
            <h2>{`${user.firstName} ${user.lastName}`}</h2>
            <p>{user.bio}</p>
          </div>
        ))} */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log("USER STATE", state.user)
  // console.log("SKILL STATE", state.skillsReducer)
  return {
    userId: state.user.id,
    usersWithCurrentSkill: state.skillsReducer.usersWithCurrentSkill
  }
}

const mapDispatchToProps = dispatch => {
  return {
    currentSkill: skillId => dispatch(currentSkill(skillId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
