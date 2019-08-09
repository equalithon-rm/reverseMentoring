import React, {Component} from 'react'
// import {skills} from '../store/skillReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'

export class Dashboard extends Component {
  async componentDidMount() {}

  render() {
    // const {} = this.props

    return (
      <div id="dashbaord-list">
        <h1>Dashboard List</h1>
        {/* {mentees.map(mentee => (
          <div key={mentee.id}>
            <h2>{`${mentee.firstName} ${mentee.lastName}`}</h2>
            <p>{mentee.blurb}</p>
          </div>
        ))} */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
