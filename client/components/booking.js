import React, {Component} from 'react'
import {fetchBookings} from '../store/bookingReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class Booking extends Component {
  componentDidMount() {
    this.props.fetchBookings()
  }
  render() {
    const {bookings, loading, userId} = this.props

    if (loading) return <div>Loading...</div>
    let history

    if (
      bookings.filter(booking => booking.mentorId === userId) ||
      bookings.filter(booking => booking.menteeId === userId)
    ) {
      history = bookings.filter(
        booking => booking.mentorId === userId || booking.menteeId === userId
      )
    }
    return (
      <div id="booking-view">
        <h1>Meeting History:</h1>
        {history.map(book => (
          <div key={book.id}>
            <h2>Connection Date: {book.dateConnection}</h2>
            <h2>Booking Notes: {book.notes}</h2>
            <br />
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.bookingReducer.loading,
    bookings: state.bookingReducer.bookings,
    userId: state.userReducer.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBookings: () => dispatch(fetchBookings())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking)
