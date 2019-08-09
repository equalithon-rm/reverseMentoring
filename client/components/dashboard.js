import React, {Component} from 'react'
// import {skills} from '../store/skillReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'

//http://localhost:8080/api/skills/skillsInterestedIn/1
//i am user id:1 name: Linda intrestedSkill: 2

export class Dashboard extends Component {
  async componentDidMount() {
    //ex i am interested in seeing all users with skillId 1
    // const {data} = await axios.get('/api/skills/currentSkills/:idSkill')
    const {data} = await axios.get('/api/skills/currentSkills/1')
    console.log('DATA', data)
  }

  render() {
    const {userId} = this.props
    // console.log('DATA', {data})

    return (
      <div id="dashbaord-list">
        <h1>Dashboard List</h1>
        {/* {mentees.map(mentee => (
          <div key={mentee.id}>
            <h2>{`${mentee.firstName} ${mentee.lastName}`}</h2>
            <p>{mentee.blurb}</p>
          </div>
        ))} */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log('USER INFO', state.user)
  return {
    //once capture form is completed will Users have a skillsIntrestedIn property?
    userId: state.user.id
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     getSkills: () => dispatch(skills())
//   }
// }

export default connect(mapStateToProps)(Dashboard)
