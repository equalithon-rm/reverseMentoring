import React from 'react'
import {Login, AboutHome} from '../components'
import {Hero, Heading} from 'react-bulma-components/full'

const Welcome = () => {
  return (
    <Hero size="fullheight" className="aboutSection">
      <Hero.Head renderAs="header">
        <Heading className="hero-title" size={1}>
          Welcome to Elevate{' '}
        </Heading>
        <Heading className="subtitle" size={3}>
          A reverse mentoring app.
        </Heading>
      </Hero.Head>
      <br />
      <Hero.Body>
        <div className="columns">
          <div className="column">
            <Heading size={5}>What is Reverse Mentoring?</Heading>
            It is a career development practice that helps businesses mine
            certain insights or information of the less experienced, often
            younger employees for senior executives
            <p>
              <a
                href="https://grasshopperherder.com/reverse-mentoring-what-millennials-can-teach-executives-and-senior-managers"
                target="_blank"
                rel="noopener noreferrer"
                className="button learn-buttons is-danger"
              >
                Learn more
              </a>
            </p>
          </div>
          <div className="column">
            <Heading size={5}>
              How can we close the gender gap for women in tech?
            </Heading>
            Elevate provides a space where C-level executives can search for
            female coworkers by skills and offer them mentorship. This will
            enable more females to rise into C-level positions
            <p>
              <a
                href="https://www.mckinsey.com/industries/high-tech/our-insights/closing-the-tech-gender-gap-through-philanthropy-and-corporate-social-responsibility"
                target="_blank"
                rel="noopener noreferrer"
                className="button learn-buttons is-danger"
              >
                Learn more
              </a>
            </p>
          </div>
          <div className="column">
            <Heading size={5}>
              User Friendly, Gmail Signup, Calendly Invites, Notifications
            </Heading>
            Connect with a mentor in three clicks; Signup/login with your Gmail
            account; Receive calendar invite when your ready to meet; Get
            notified in real time when someone is interested in meeting you
            <p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button learn-buttons is-danger"
              >
                Learn more
              </a>
            </p>
          </div>
        </div>
      </Hero.Body>

      <AboutHome />

      <Hero.Footer>
        <footer className="footer" />
      </Hero.Footer>
    </Hero>
  )
}

export default Welcome
