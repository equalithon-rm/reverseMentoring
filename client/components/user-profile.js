import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchOneProfile} from '../store/profiles'
import {
  Section,
  Heading,
  Image,
  Box,
  Tile,
  Button
} from 'react-bulma-components/full'

class UserProfile extends Component {
  componentDidMount() {
    this.props.fetchOneProfile(
      this.props.match.params.senderId || this.props.userId
    )
  }

  render() {
    const {loading, user} = this.props
    const currentSkills = this.props.user.currentSkills
    const skillsInterestedIns = this.props.user.skillsInterestedIns
    let sinceDate = ''

    // Format  the date //
    if (user.createdAt) {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
      const d = user.createdAt.split('-')
      const month = Number(d[1])
      const year = d[0]
      sinceDate = months[month] + ', ' + year
    }

    if (loading) return <div>Loading...</div>

    return (
      <Section>
        <Box>
          <Tile kind="ancestor">
            <Tile size={8} vertical>
              <Tile>
                <Tile kind="parent">
                  <Tile
                    renderAs="article"
                    kind="child"
                    notification
                    color="warning"
                  >
                    <Heading>{user.fullName}</Heading>
                    <br />
                    <Image size={128} src={user.imgUrl} />
                    <br />
                    <Heading subtitle>{user.currentPosition}</Heading>
                    <Heading subtitle>{user.email}</Heading>
                    <Heading subtitle>#{user.gender}</Heading>
                  </Tile>
                </Tile>

                <Tile kind="parent" vertical>
                  <Tile
                    renderAs="article"
                    kind="child"
                    notification
                    color="warning"
                  >
                    <Heading>Seeking mentoring in:</Heading>
                    <ul>
                      {skillsInterestedIns ? (
                        skillsInterestedIns.map(curSkill => (
                          <li key={curSkill.skill.id}>
                            <Heading subtitle>{curSkill.skill.name}</Heading>
                          </li>
                        ))
                      ) : (
                        <li>Loading skills...</li>
                      )}
                    </ul>
                  </Tile>

                  <Tile
                    renderAs="article"
                    kind="child"
                    notification
                    color="warning"
                  >
                    <Heading>Offering mentoring in:</Heading>
                    <ul>
                      {currentSkills ? (
                        currentSkills.map(curSkill => (
                          <li key={curSkill.skill.id}>
                            <Heading subtitle>{curSkill.skill.name}</Heading>
                          </li>
                        ))
                      ) : (
                        <li>Loading skills...</li>
                      )}
                    </ul>
                  </Tile>
                </Tile>
              </Tile>

              <Tile kind="parent">
                <Tile
                  renderAs="article"
                  kind="child"
                  notification
                  color="warning"
                  className="flex-container"
                >
                  <Heading className="flex-containee">Find a Mentor</Heading>
                  <Button
                    to="/search"
                    renderAs={Link}
                    size="medium"
                    color="dark"
                    className="flex-containee"
                  >
                    Learn something new!
                  </Button>
                  <div className="content" />
                </Tile>
              </Tile>
            </Tile>
            <Tile kind="parent">
              <Tile
                renderAs="article"
                kind="child"
                notification
                color="warning"
              >
                <div className="content">
                  <Heading>About Me</Heading>
                  <hr />
                  <div>{user.bio}</div>
                  <br />
                  <div className="content">
                    Working at {user.currentCompany} since:{' '}
                    {user.dateJoinedCurrentCompany ? (
                      user.dateJoinedCurrentCompany.slice(0, 10)
                    ) : (
                      <div>Loading start date..</div>
                    )}.
                  </div>
                </div>
              </Tile>
            </Tile>
          </Tile>
        </Box>
      </Section>
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
