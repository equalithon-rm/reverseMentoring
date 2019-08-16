import React, {Component} from 'react'
import {fetchMentees} from '../store/menteeReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {
  Section,
  Heading,
  Image,
  Box,
  Tile,
  Button
} from 'react-bulma-components/full'

export class Dashboard extends Component {
  // componentDidMount() {
  //   this.props.fetchMentees()
  // }
  render() {
    // const {loading, mentees} = this.props

    return (
      <Section>
        <Box>
          <Tile kind="ancestor">
            <Tile size={8} vertical>
              <Tile>
                <Tile kind="parent">
                  <Tile renderAs="article" kind="child" notification>
                    <Image src="./img/reverse-mentoring-diversity-getty.jpg" />
                    <Heading> </Heading>
                    <Heading subtitle> </Heading>
                    <Heading subtitle> </Heading>
                    <Heading subtitle> </Heading>
                  </Tile>
                </Tile>

                <Tile kind="parent" vertical>
                  <Tile
                    renderAs="article"
                    kind="child"
                    notification
                    color="primary"
                  >
                    {' '}
                    <Heading>Connect with a Mentor</Heading>
                    <div className="center">
                      <Button
                        to="/search"
                        renderAs={Link}
                        color="light"
                        size="medium"
                      >
                        Search...
                      </Button>
                    </div>
                  </Tile>
                </Tile>
              </Tile>

              <Tile kind="parent">
                <Tile renderAs="article" kind="child" notification color="dark">
                  <Heading subtitle>
                    User Friendly, Gmail Signup, Calendly Invites, Notifications
                  </Heading>

                  <div className="content">
                    Connect with a mentor in three clicks; Signup/login with
                    your Gmail account; Receive calendar invite when your ready
                    to meet; Get notified in real time when someone is
                    interested in meeting you
                  </div>
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
                  <Heading>About Elevate</Heading>
                  What is Reverse Mentoring?
                  <hr />
                  It is a career development practice that helps businesses mine
                  certain insights or information of the less experienced, often
                  younger employees for senior executives How can we close the
                  gender gap for women in tech?
                  <hr />
                  Elevate provides a space where C-level executives can search
                  for female coworkers by skills and offer them mentorship. This
                  will enable more females to rise into C-level positions
                </div>
              </Tile>
            </Tile>
          </Tile>
        </Box>
      </Section>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.menteeReducer.loading,
    mentees: state.menteeReducer.mentees
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMentees: () => dispatch(fetchMentees())
  }
}

export default connect(mapDispatchToProps)(Dashboard)
