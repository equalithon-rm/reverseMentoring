import React from 'react'
import {Login} from '../components'
import {Link} from 'react-router-dom'

const Wellcome = () => {
  return (
    <div>
      <hr />
      <h1> Wellcome to Elevate </h1>
      <br />
      <h5> Wellcome to Elevate </h5>
      <br />

      <h6>
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
          efficitur vulputate. Nullam bibendum augue ut luctus posuere.
          Suspendisse ligula orci, maximus ac massa vitae, porta luctus purus.
          Sed quis risus et orci imperdiet maximus. Donec pulvinar luctus lacus
          vel ultricies. Nam vulputate sodales feugiat. Mauris ligula tortor,
          porta id bibendum sit amet, cursus vel ex. Vivamus in nulla non libero
          congue bibendum eget vitae turpis. Donec blandit placerat mi ut
          faucibus. Nunc at quam vestibulum, feugiat nulla at, fringilla lectus.
          Mauris posuere sagittis varius. Duis ornare ac dolor eu ullamcorper.
          Ut pharetra massa quis orci rhoncus tincidunt. Nam ullamcorper
          imperdiet mi, at sollicitudin odio suscipit sed. Mauris in ex ornare,
          sodales dui nec, efficitur tellus. Etiam interdum consequat blandit.
          Pellentesque egestas, enim nec maximus viverra, arcu lacus feugiat
          risus, in congue quam risus non magna. Phasellus elit sem, vehicula
          sed lacinia non, congue at justo. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Donec vitae
          odio luctus, convallis risus id, lacinia lacus. Curabitur sagittis
          lacus magna. In blandit eros sed vestibulum ultricies. Cras mattis
          consectetur lobortis. Integer congue luctus fringilla. Sed ligula
          enim, dignissim id luctus sed, efficitur ac turpis. Mauris tincidunt
          arcu ut augue aliquet ullamcorper. Interdum et malesuada fames ac ante
          ipsum primis in faucibus.{' '}
        </p>
      </h6>

      <hr />
      <h6> Are you a member?</h6>
      <Login />

      <Link to="/signup">Sign Up here!</Link>
    </div>
  )
}

export default Wellcome
