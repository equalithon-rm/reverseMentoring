import React, {Component} from 'react'
import {fetchMentees} from '../store/menteeReducer'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

export class Dashboard extends Component {
  render() {
    return <div id="mentee-list" />
  }
}

const mapStateToProps = state => {
  return {
    loading: state.menteeReducer.loading,
    mentees: state.menteeReducer.mentees
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMentees: () => dispatch(fetchMentees())
  }
}

export default connect(mapDispatchToProps)(Dashboard)
