import React from 'react'
import {Login, HeroBanner} from '../components'
import {Section, Hero, Container, Heading} from 'react-bulma-components/full'
import {Link} from 'react-router-dom'

const Welcome = () => {
  return (
    <section>
      <Hero color="info" gradient>
        <Hero.Head>
          <div className="hero-title">
            <Heading size={1}>Welcome to Elevate </Heading>
            <Heading className="subtitle" size={3}>
              A reverse mentoring app.
            </Heading>
          </div>
        </Hero.Head>
        <Hero.Body>
          <div className="hero-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              rhoncus efficitur vulputate. Nullam bibendum augue ut luctus
              posuere. Suspendisse ligula orci, maximus ac massa vitae, porta
              luctus purus. Sed quis risus et orci imperdiet maximus. Donec
              pulvinar luctus lacus vel ultricies. Nam vulputate sodales
              feugiat. Mauris ligula tortor, porta id bibendum sit amet, cursus
              vel ex. Vivamus in nulla non libero congue bibendum eget vitae
              turpis.Donec blandit placerat mi ut faucibus. Nunc at quam
              vestibulum, feugiat nulla at, fringilla lectus. Mauris posuere
              sagittis varius. Duis ornare ac dolor eu ullamcorper. Ut pharetra
              massa quis orci rhoncus tincidunt. Nam ullamcorper imperdiet mi,
              at sollicitudin odio suscipit sed. Mauris in ex ornare, sodales
              dui nec, efficitur tellus. Etiam interdum consequat blandit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              rhoncus efficitur vulputate. Nullam bibendum augue ut luctus
              posuere. Suspendisse ligula orci, maximus ac massa vitae, porta
              luctus purus. Sed quis risus et orci imperdiet maximus. Donec
              pulvinar luctus lacus vel ultricies. Nam vulputate sodales
              feugiat. Mauris ligula tortor, porta id bibendum sit amet, cursus
              vel ex. Vivamus in nulla non libero congue bibendum eget vitae
              turpis.Donec blandit placerat mi ut faucibus. Nunc at quam
              vestibulum, feugiat nulla at, fringilla lectus. Mauris posuere
              sagittis varius. Duis ornare ac dolor eu ullamcorper. Ut pharetra
              massa quis orci rhoncus tincidunt. Nam ullamcorper imperdiet mi,
              at sollicitudin odio suscipit sed. Mauris in ex ornare, sodales
              dui nec, efficitur tellus. Etiam interdum consequat blandit.
            </p>
          </div>
        </Hero.Body>
        <Hero.Footer>
          <div className="hero-footer">
            <Heading size={6}>Are you a member?</Heading>
            <Login />
            <Link to="/signup">Sign Up here!</Link>
          </div>
        </Hero.Footer>
      </Hero>
    </section>
  )
}

export default Welcome
