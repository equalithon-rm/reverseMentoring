import React, {Component} from 'react'
import {Hero, Container, Heading} from 'react-bulma-components/full'

class HeroBanner extends React.Component {
  render() {
    return (
      <Hero size="medium" color="info" gradient>
        <Hero.Body>
          <Container>
            <Heading>Reverse Mentoring</Heading>
          </Container>
        </Hero.Body>
      </Hero>
    )
  }
}

export default HeroBanner
