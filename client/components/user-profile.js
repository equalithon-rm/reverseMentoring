import React, {Component} from 'react'
import {connect} from 'react-redux'

class UserProfile extends Component {
  render() {
    return (
      <div className="flex-container">
        <h1 className="flex-containee">Full Name: {this.props.fullName}</h1>
        <br />
        <h3 className="flex-containee">Email: {this.props.email}</h3>
        <br />
        <h3 className="flex-containee">Gender: {this.props.gender}</h3>
        <br />
        <img
          className="userImage flex-containee"
          src={this.props.imgUrl}
          width="200px"
          image="200px"
        />
        <br />
        <h3 className="flex-containee">Company: {this.props.currentCompany}</h3>
        <br />
        <h3 className="flex-containee">
          Position: {this.props.currentPosition}
        </h3>
        <br />
        <h3 className="flex-containee">Skills To Offer:</h3>
        <ul className="flex-containee">
          {this.props.skillsHas.map(curSkill => (
            <li key={curSkill.skill.id} className="flex-containee">
              {curSkill.skill.name}
            </li>
          ))}
        </ul>
        <br />
        <h3 className="flex-containee">Skills Interested In:</h3>
        <ul className="flex-containee">
          {this.props.skillsWants.map(curSkill => (
            <li key={curSkill.skill.id} className="flex-containee">
              {curSkill.skill.name}
            </li>
          ))}
        </ul>
        <br />
        <h3 className="flex-containee">Bio:</h3>
        <p className="flex-containee">{this.props.bio}</p>
        <br />

        {/* <h3 className="experience">Experience</h3>
        <p>{userInfo.experience}</p> */}

        {/* <h3 className="goals">Goals</h3>
        <p>{userInfo.goals}</p> */}

        {/* <h3 className="interests">Interests</h3>
        <p>{userInfo.interests}</p> */}

        {/* <h3 className="socialMedia">Social Media</h3>
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
    firstName: state.user.fullName,
    lastName: state.user.fullName,
    gender: state.user.gender,
    email: state.user.email,
    imgUrl: state.user.imgUrl,
    currentCompany: state.user.currentCompany,
    currentPosition: state.user.currentPosition,
    dateJoinedCurrentCompany: state.user.dateJoinedCurrentCompany,
    bio: state.user.bio,
    hasCompletedSignup: state.user.hasCompletedSignup,
    skillsHas: state.user.currentSkills,
    skillsWants: state.user.skillsInterestedIns
  }
}

export default connect(mapState)(UserProfile)
