import React, {Component} from 'react'
import {
  Section,
  Columns,
  Box,
  Heading,
  Image
} from 'react-bulma-components/full'

export default class AboutHome extends Component {
  render() {
    return (
      <Section className="aboutBox">
        <Box>
          <Heading className="hero-title" size={1}>
            Elevate Team
          </Heading>

          <Columns>
            <Columns.Column size={2}>
              {' '}
              <Image src="https://equalithon-team-elevate.s3.amazonaws.com/madinah.jpg" />
              <Heading size={5}>Madinah S. Ali</Heading>
              <Heading className="subtitle">Mentor</Heading>
            </Columns.Column>

            <Columns.Column size={2}>
              {' '}
              <Image src="https://equalithon-team-elevate.s3.amazonaws.com/linda.jpg" />
              <Heading size={5}>Linda Saraguro</Heading>
              <Heading className="subtitle">Fullstack Developer</Heading>
            </Columns.Column>
            <Columns.Column size={2}>
              {' '}
              <Image src="https://equalithon-team-elevate.s3.amazonaws.com/macarena_crop.png" />
              <Heading size={5}>Macarena Carreno</Heading>
              <Heading className="subtitle">Fullstack Developer</Heading>
            </Columns.Column>
            <Columns.Column size={2}>
              {' '}
              <Image src="https://equalithon-team-elevate.s3.amazonaws.com/tal.jpg" />
              <Heading size={5}>Tal Luigi</Heading>
              <Heading className="subtitle">Fullstack Developer</Heading>
            </Columns.Column>

            <Columns.Column size={2}>
              {' '}
              <Image src="https://equalithon-team-elevate.s3.amazonaws.com/jocelyn.jpg" />
              <Heading size={5}>Jocelyn Jeriah</Heading>
              <Heading className="subtitle">Fullstack Developer</Heading>
            </Columns.Column>
            <Columns.Column size={2}>
              {' '}
              <Image src="https://equalithon-team-elevate.s3.amazonaws.com/sam.jpg" />
              <Heading size={5}>Sam Peach</Heading>
              <Heading className="subtitle">Fullstack Developer</Heading>
            </Columns.Column>
          </Columns>
        </Box>
      </Section>
    )
  }
}
