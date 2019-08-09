import React, {Component} from 'react'
// import {fetchMentees} from '../store/menteeReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'

//http://localhost:8080/api/skills/skillsInterestedIn/1
//i am user id:1 name: Linda intrestedSkill: 2

export class Dashboard extends Component {
  async componentDidMount() {
    const {data} = await axios.get('/api/skills/array')
  }

  render() {
    // const {loading, users,} = this.props

    // if (loading) return <div>Loading...</div>

    return (
      <div id="dashbaord-list">
        <h1>Hello</h1>
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
  console.log('USER INFO', state.user)
  return {
    userId: state.user.id
    //search what skills your intrested in based on you id
    //search users that have the skill based on your interseted skillId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // fetchMentees: () => dispatch(fetchMentees())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
