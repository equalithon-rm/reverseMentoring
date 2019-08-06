import axios from 'axios'

const GETTING_MENTORS = 'GETTING_MENTORS '
const GOT_MENTORS = 'GOT_MENTORS'
const GETTING_ONE_MENTOR = 'GETTING_ONE_MENTOR'
const GOT_ONE_MENTOR = 'GOT_ONE_MENTOR'
const REMOVE_MENTOR = 'REMOVE_MENTOR'
const UPDATE_MENTOR = 'UPDATE_MENTOR'
const CREATE_MENTOR = 'CREATE_MENTOR'

const gettingMentors = () => ({
  type: GETTING_MENTORS
})

const gotMentors = mentors => ({
  type: GOT_MENTORS,
  mentors
})

const gettingOneMentor = () => ({
  type: GETTING_ONE_MENTOR
})

const gotOneMentor = mentor => ({
  type: GOT_ONE_MENTOR,
  mentor
})

const removeMentor = mentorId => ({
  type: REMOVE_MENTOR,
  mentorId
})

const updateMentor = mentor => ({
  type: UPDATE_MENTOR,
  mentor
})

const createMentor = mentor => ({
  type: CREATE_MENTOR,
  mentor
})

export const fetchMentors = () => {
  return async dispatch => {
    dispatch(gettingMentors())
    const response = await axios.get('/api/mentors')
    dispatch(gotMentors(response.data))
  }
}

export const fetchMentor = mentorId => {
  return async dispatch => {
    dispatch(gettingOneMentor())
    const response = await axios.get(`/api/mentors/${mentorId}`)
    dispatch(gotOneMentor(response.data))
  }
}

export const deleteMentor = mentorId => {
  return async dispatch => {
    await axios.delete(`/api/mentors/${mentorId}`)
    dispatch(removeMentor(mentorId))
  }
}
export const putMentor = (mentorId, mentor) => {
  return async dispatch => {
    const response = await axios.put(`/api/mentors/${mentorId}`, mentor)
    dispatch(updateMentor(response.data))
  }
}

export const addMentor = mentor => {
  return async dispatch => {
    const response = await axios.post('/api/mentors', mentor)
    dispatch(createMentor(response.data))
  }
}

const initialState = {
  loading: false,
  mentors: [],
  mentor: {}
}

const mentorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_MENTORS:
      return {...state, loading: true}
    case GOT_MENTORS:
      return {...state, loading: false, mentors: action.mentors}
    case GETTING_ONE_MENTOR:
      return {...state, loading: true}
    case GOT_ONE_MENTOR:
      return {...state, loading: false, mentor: action.mentor}
    case REMOVE_MENTOR:
      return {
        ...state,
        mentors: state.mentors.filter(mentor => mentor.id !== action.mentorsId)
      }
    case UPDATE_MENTOR:
      return {...state, mentor: action.mentor}
    case CREATE_MENTOR:
      return {...state, mentor: [...state.mentors, action.mentor]}
    default:
      return state
  }
}

export default mentorReducer
