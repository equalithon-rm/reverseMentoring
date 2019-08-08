import React from 'react'
import ReactDOM from 'react-dom'

const image = {
  src: './profile_image.jpg',
  alt: 'profile image',
  width: '30%',
  height: '30%'
}

const userInfo = {
  firstName: 'Jane',
  lastName: 'Smith',
  occupation: 'Senior Software Engineer',
  summary:
    'Senior Software Engineer with 10 years experience looking for junior Javascript mentee.',
  experience: 'Javascript and frameworks - 10 years',
  goals: 'Would like to help junior mentor learn all there is to know about JS',
  interests: 'learning more about Vue.js',
  skills: ['Javascript', 'Node.js', 'Express.js', 'Backbone.js', 'D3.js'],
  socialMedia: ['Email', 'Slack', 'LinkedIn', 'Twitter', 'Instagram']
}

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <h1>hello</h1>
        <img
          className="userImage"
          src={image.src}
          width={image.width}
          image={image.height}
        />

        <h1 className="name">{userInfo.firstName + ' ' + userInfo.lastName}</h1>

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
        </ul>
      </div>
    )
  }
}

export default UserProfile
