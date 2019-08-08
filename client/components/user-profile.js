import React, {Component} from 'react'
import {connect} from 'react-redux'

class UserProfile extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.fullName}</h1>
        <h3>{this.props.email}</h3>
        <img
          className="userImage"
          src={this.props.imgUrl}
          width="200px"
          image="200px"
        />

        {/* <h1 className="name">{userInfo.firstName + ' ' + userInfo.lastName}</h1>

        <h2 className="occupation">{userInfo.occupation}</h2>

        <h3 className="summary">Summary</h3>
        <p>{userInfo.summary}</p>

        <h3 className="experience">Experience</h3>
        <p>{userInfo.experience}</p>

        <h3 className="goals">Goals</h3>
        <p>{userInfo.goals}</p>

        <h3 className="interests">Interests</h3>
        <p>{userInfo.interests}</p>

        <h3 className="skills">Skills</h3>
        <ul>
          {userInfo.skills.map((currentSkill, index) => (
            <li key={index}>{currentSkill}</li>
          ))}
        </ul>

        <h3 className="socialMedia">Social Media</h3>
        <ul>
          {userInfo.skills.map((currentSocialMedia, index) => (
            <li key={index}>{currentSocialMedia}</li>
          ))}
        </ul> */}
      </div>
    )
  }
}

const mapState = state => {
  return {
    fullName: state.user.fullName,
    email: state.user.email,
    imgUrl: state.user.imgUrl
  }
}

export default connect(mapState)(UserProfile)
