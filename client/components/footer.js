import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Login} from '../components'
import {Button, Heading} from 'react-bulma-components/full'

const Footer = () => {
  return (
    <footer className="footer">
      <Heading className="subtitle footer-text" size={5}>
        Esteem Equalithon, Team 6
      </Heading>
    </footer>
  )
}

export default Footer
