import axios from 'axios'

// const GETTING_BOOKING = 'GETTING_BOOKING'
// const GOT_BOOKING = 'GOT_BOOKING'
const GETTING_ONE_BOOKING = 'GETTING_ONE_BOOKING'
const GOT_ONE_BOOKING = 'GOT_ONE_BOOKING'

const gettingOneBooking = () => ({
  type: GETTING_ONE_BOOKING
})

const gotOneBooking = booking => ({
  type: GOT_ONE_BOOKING,
  booking
})

export const fetchBooking = bookingId => {
  return async dispatch => {
    dispatch(gettingOneBooking())
    const response = await axios.get(`/api/bookings/${bookingId}`)
    dispatch(gotOneBooking(response.data))
  }
}

const initialState = {
  loading: false,
  booking: {}
}

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_ONE_BOOKING:
      return {...state, loading: true}
    case GOT_ONE_BOOKING:
      return {...state, loading: false, booking: action.booking}
    default:
      return state
  }
}

export default bookingReducer
