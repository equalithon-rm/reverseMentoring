import React, {Component} from 'react'
import {
  Hero,
  Section,
  Box,
  Tile,
  Heading,
  Image
} from 'react-bulma-components/full'

export default class About extends Component {
  render() {
    return (
      <Hero size="fullheight">
        <Hero.Head>
          <Heading className="hero-title" size={1}>
            The Elevate Team
          </Heading>
        </Hero.Head>
        <Section>
          <Box>
            <Tile kind="ancestor">
              <Tile size={12} vertical>
                <Tile>
                  <Tile kind="parent" vertical>
                    <Tile
                      renderAs="article"
                      kind="child"
                      notification
                      color="light"
                    >
                      <Heading>Madinah S. Ali</Heading>
                      <Heading className="subtitle">Mentor</Heading>
                      <Image size="1by1" src="./img/madinah.jpg" />
                    </Tile>

                    <Tile
                      renderAs="article"
                      kind="child"
                      notification
                      color="light"
                    >
                      <Heading>Linda Saraguro</Heading>
                      <Heading className="subtitle">
                        Fullstack Developer
                      </Heading>
                      <Image size="1by1" src="./img/linda.jpg" />
                    </Tile>
                  </Tile>

                  <Tile kind="parent" vertical>
                    <Tile
                      renderAs="article"
                      kind="child"
                      notification
                      color="light"
                    >
                      <Heading>Macarena Carreno</Heading>
                      <Heading className="subtitle">
                        Fullstack Developer
                      </Heading>
                      <Image size="1by1" src="./img/macarena.jpeg" />
                    </Tile>

                    <Tile
                      renderAs="article"
                      kind="child"
                      notification
                      color="light"
                    >
                      <Heading>Tal Luigi</Heading>
                      <Heading className="subtitle">
                        Fullstack Developer
                      </Heading>
                      <Image size="1by1" src="./img/tal.jpg" />
                    </Tile>
                  </Tile>

                  <Tile kind="parent" vertical>
                    <Tile
                      renderAs="article"
                      kind="child"
                      notification
                      color="light"
                    >
                      <Heading>Jocelyn Jeriah</Heading>
                      <Heading className="subtitle">
                        Fullstack Developer
                      </Heading>
                      <Image size="1by1" src="./img/jocelyn.jpg" />
                    </Tile>

                    <Tile
                      renderAs="article"
                      kind="child"
                      notification
                      color="light"
                    >
                      <Heading>Sam Peach</Heading>
                      <Heading className="subtitle">
                        Fullstack Developer
                      </Heading>
                      <Image size="1by1" src="./img/sam.jpg" />
                    </Tile>
                  </Tile>
                </Tile>
              </Tile>
            </Tile>
          </Box>
        </Section>
      </Hero>
    )
  }
}
