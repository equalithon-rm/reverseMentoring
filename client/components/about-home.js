import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import {
  Section,
  Columns,
  Box,
  Heading,
  Image
} from 'react-bulma-components/full'

const team = [
  {
    id: 1,
    name: 'Madinah S. Ali',
    github: '',
    linkedin: 'https://www.linkedin.com/in/madinahali/',
    img: './img/madinah.jpg',
    role: 'Mentor'
  },
  {
    id: 2,
    name: 'Macarena Carreno',
    github: 'https://github.com/MacarenaCarreno',
    linkedin: 'https://www.linkedin.com/in/mcarrenog/',
    img: './img/macarena.jpeg',
    role: 'Software Engineer'
  },
  {
    id: 3,
    name: 'Jocelyn Jeriah',
    github: 'https://github.com/luminousbeam',
    linkedin: 'https://www.linkedin.com/in/jocelynjeriah/',
    img: './img/jocelyn.jpg',
    role: 'Software Engineer'
  },
  {
    id: 4,
    name: 'Linda Saraguro ',
    github: 'https://github.com/Saragurol',
    linkedin: 'https://www.linkedin.com/in/linda-saraguro-123524122/',
    img: './img/linda.jpg',
    role: 'Software Engineer'
  },
  {
    id: 5,
    name: 'Tal Luigi',
    github: 'https://github.com/LuigiLegion',
    linkedin: 'https://www.linkedin.com/in/talluigi/',
    img: './img/tal.jpg',
    role: 'Software Engineer'
  },
  {
    id: 6,
    name: 'Sam Peach',
    github: 'https://github.com/sam-peach',
    linkedin: 'https://www.linkedin.com/in/sam-peach/',
    img: './img/sam.jpg',
    role: 'Software Engineer'
  }
]

export default class AboutHome extends Component {
  render() {
    return (
      <Section className="aboutBox">
        <Box>
          <Heading className="hero-title" size={1}>
            The Elevate Team
          </Heading>

          <Columns>
            {team.map(eng => (
              <Columns.Column key={eng.id} size={2}>
                {' '}
                <Image src={eng.img} />
                <Heading size={5}>{eng.name}</Heading>
                <Heading className="subtitle">{eng.role}</Heading>
                <Heading className="subtitle is-6">
                  <a
                    href={eng.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{' '}
                  |{' '}
                  <a
                    href={eng.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin
                  </a>
                </Heading>
              </Columns.Column>
            ))}
          </Columns>
        </Box>
      </Section>
    )
  }
}
