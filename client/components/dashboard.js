import React, {Component} from 'react'
import {currentSkill} from '../store/skillsListReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'

export class Dashboard extends Component {
  async
  // async componentDidMount() {
  //   //trouble grabbing the desired skill Id, so hardcoded a desired skillId
  //   let arr = [1,2];
  //   for(let i =0; i < arr.length; i++){
  //    await this.props.currentSkill(arr[i])
  //   }
  componentDidMount() {
    //trouble grabbing the desired skill Id, so hardcoded a desired skillId
    let arr = [2, 3]
    for (let i = 0; i < arr.length; i++) {
      this.props.currentSkill(arr[i])
    }

    // grab all users with current skill
  }

  render() {
    const {usersWithCurrentSkill} = this.props
    console.log('THIS.PROPS', this.props)
    console.log('ALLUSERSWITHCURRENTSKILL', usersWithCurrentSkill)

    return (
      <div id="dashbaord-list">
        <h1>Users with desired skill:</h1>
        {usersWithCurrentSkill.map(user => (
          <div key={user.id}>
            <img src={user.imgUrl} />
            <h2>{`${user.firstName} ${user.lastName}`}</h2>
            <p>Bio: {user.bio}</p>
            <br />
          </div>
        ))}
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
