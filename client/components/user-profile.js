import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOneProfile} from '../store/profiles'

class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchOneProfile(this.props.userId)
  }
  render() {
    const {loading, user} = this.props
    const currentSkills = this.props.user.currentSkills
    const skillsInterestedIns = this.props.user.skillsInterestedIns

    if (loading) return <div>Loading...</div>

    return (
      <div className="flex-container">
        <h1 className="flex-containee">Full Name: {user.fullName}</h1>
        <br />
        <h3 className="flex-containee">Email: {user.email}</h3>
        <br />
        <h3 className="flex-containee">Gender: {user.gender}</h3>
        <br />
        <img
          className="userImage flex-containee"
          src={user.imgUrl}
          width="200px"
          image="200px"
        />
        <br />
        <h3 className="flex-containee">Company: {user.currentCompany}</h3>
        <br />
        <h3 className="flex-containee">Position: {user.currentPosition}</h3>
        <br />
        <h3 className="flex-containee">Skills To Offer:</h3>
        <ul className="flex-containee">
          {currentSkills ? (
            currentSkills.map(curSkill => (
              <li key={curSkill.skill.id} className="flex-containee">
                {curSkill.skill.name}
              </li>
            ))
          ) : (
            <li>Loading skills...</li>
          )}
        </ul>
        <br />
        <h3 className="flex-containee">Skills Interested In:</h3>
        <ul className="flex-containee">
          {skillsInterestedIns ? (
            skillsInterestedIns.map(curSkill => (
              <li key={curSkill.skill.id} className="flex-containee">
                {curSkill.skill.name}
              </li>
            ))
          ) : (
            <li>Loading skills...</li>
          )}
        </ul>
        <br />
        <h3 className="flex-containee">Bio:</h3>
        <p className="flex-containee">{user.bio}</p>
        <br />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.user.id,
  loading: state.profileReducer.loading,
  user: state.profileReducer.profile
})

const mapDispatchToProps = dispatch => ({
  fetchOneProfile(userId) {
    dispatch(fetchOneProfile(userId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
