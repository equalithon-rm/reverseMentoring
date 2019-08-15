import React from 'react'
import {Login, HeroBanner} from '../components'
import {
  Section,
  Hero,
  Container,
  Heading,
  Button,
  Media
} from 'react-bulma-components/full'
import {Link} from 'react-router-dom'

const Welcome = () => {
  return (
    <Hero size="fullheight">
      <Hero.Head renderAs="header">
        <Heading className="hero-title" size={1}>
          Welcome to Elevate{' '}
        </Heading>
        <Heading className="subtitle" size={3}>
          A reverse mentoring app.
        </Heading>
      </Hero.Head>
      <Hero.Body>
        <div className="columns">
          <p className="column">
            <Heading size={5}>What is Reverse Mentoring?</Heading>
            It is a career development practice that helps businesses mine
            certain insights or information of the less experienced, often
            younger employees for senior executives
          </p>
          <p className="column">
            <Heading size={5}>
              How can we close the gender gap for women in tech?
            </Heading>
            Elevate provides a space where C-level executives can search for
            female coworkers by skills and offer them mentorship. This will
            enable more females to rise into C-level positions
          </p>
          <p className="column">
            <Heading size={5}>
              User Friendly, Gmail Signup, Calendly Invites, Notifications
            </Heading>
            Connect with a mentor in three clicks; Signup/login with your Gmail
            account; Receive calendar invite when your ready to meet; Get
            notified in real time when someone is interested in meeting you
          </p>
        </div>
      </Hero.Body>
      <Hero.Footer>
        <footer className="footer">
          <div className="has-text-centered container">
            <Heading className="subtitle footer-text" size={5}>
              Are you a member?
            </Heading>
            <div className="is-grouped">
              <Button
                href="/auth/google"
                color="dark"
                renderAs="a"
                size="medium"
              >
                Sign In
              </Button>
              <br />
              <div>
                <Button to="/signup" color="dark" renderAs={Link} size="medium">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </Hero.Footer>
    </Hero>
  )
}

export default Welcome
