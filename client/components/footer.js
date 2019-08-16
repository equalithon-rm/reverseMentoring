import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Button, Heading} from 'react-bulma-components/full'

const FooterBar = () => {
  return (
    <footer className="footer">
      <Heading className="subtitle footer-text" size={5}>
        <a
          className="button is-dark"
          href="https://www.essteem.com/"
          target="_blank"
        >
          Essteem Equalithon
        </a>
      </Heading>
    </footer>
  )
}

export default FooterBar
