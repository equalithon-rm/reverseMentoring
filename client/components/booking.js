import React, {Component} from 'react'
import {fetchBookings} from '../store/bookingReducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class Booking extends Component {
  componentDidMount() {
    this.props.fetchBookings()
    const userId = Number(this.props.match.params.id)
  }
  render() {
    const {bookings, loading} = this.props

    if (loading) return <div>Loading...</div>
    let book

    if (bookings.filter(booking => booking.mentorId === userId)) {
      book = booking
    } else if (bookings.filter(booking => booking.menteeId === userId)) {
      book = booking
    }
    return (
      <div id="booking-view">
        <h1>Booking Status: Taken</h1>
        <h2>Booking dateConnection: {book.dateConnection}</h2>
        <h2>Booking Notes:{book.notes}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.bookingReducer.loading,
    bookings: state.bookingReducer.bookings
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBookings: () => dispatch(fetchBookings())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking)
