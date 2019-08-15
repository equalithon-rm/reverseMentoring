import React, {Component} from 'react'
import {fetchMentees} from '../store/menteeReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class Dashboard extends Component {
  // componentDidMount() {
  //   this.props.fetchMentees()
  // }
  render() {
    // const {loading, mentees} = this.props

    return (
      <div id="mentee-list">
        {/* {mentees.map(mentee => (
          <div key={mentee.id}>
            <h2>{`${mentee.firstName} ${mentee.lastName}`}</h2>
            <p>{mentee.blurb}</p>
          </div>
        ))} */}
        Welcome ppl!
      </div>
    )
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
