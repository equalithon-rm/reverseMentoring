import axios from 'axios'

const GETTING_BOOKINGS = 'GETTING_BOOKINGS'
const GOT_BOOKINGS = 'GOT_BOOKINGS'
const GETTING_ONE_BOOKING = 'GETTING_ONE_BOOKING'
const GOT_ONE_BOOKING = 'GOT_ONE_BOOKING'
const REMOVE_BOOKING = 'REMOVE_BOOKING'
const CREATE_BOOKING = 'CREATE_BOOKING'

const gettingBookings = () => ({
  type: GETTING_BOOKINGS
})

const gotBookings = bookings => ({
  type: GOT_BOOKINGS,
  bookings
})

const gettingOneBooking = () => ({
  type: GETTING_ONE_BOOKING
})

const gotOneBooking = booking => ({
  type: GOT_ONE_BOOKING,
  booking
})

const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId
})

const createBooking = booking => ({
  type: CREATE_BOOKING,
  booking
})

export const fetchBookings = () => {
  return async dispatch => {
    dispatch(gettingBookings())
    const response = await axios.get(`/api/bookings`)
    dispatch(gotBookings(response.data))
  }
}

export const fetchBooking = bookingId => {
  return async dispatch => {
    dispatch(gettingOneBooking())
    const response = await axios.get(`/api/bookings/${bookingId}`)
    dispatch(gotOneBooking(response.data))
  }
}

export const deleteBooking = bookingId => {
  return async dispatch => {
    await axios.delete(`/api/bookings/${bookingId}`)
    dispatch(removeBooking(bookingId))
  }
}

export const addBooking = booking => {
  return async dispatch => {
    const response = await axios.post('/api/bookings', booking)
    dispatch(createBooking(response.data))
  }
}

const initialState = {
  loading: false,
  bookings: [],
  booking: {}
}

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_BOOKINGS:
      return {...state, loading: true}
    case GOT_BOOKINGS:
      return {...state, loading: false, bookings: action.bookings}
    case GETTING_ONE_BOOKING:
      return {...state, loading: true}
    case GOT_ONE_BOOKING:
      return {...state, loading: false, booking: action.booking}
    case REMOVE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter(
          booking => booking.id !== action.bookingId
        )
      }
    case CREATE_BOOKING:
      return {...state, bookings: [...state.bookings, action.booking]}
    default:
      return state
  }
}

export default bookingReducer
