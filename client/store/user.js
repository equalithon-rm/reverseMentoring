import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const UPDATE_USER = 'UPDATE_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const updateUserAction = user => ({type: UPDATE_USER, user})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    if (res.data.id) {
      const {data} = await axios.get(`/api/users/${res.data.id}`)
      dispatch(getUser({...res.data, ...data} || defaultUser))
    } else {
      dispatch(getUser(res.data || defaultUser))
    }
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password) => async dispatch => {
  let res
  try {
    res = await axios.post('/auth/login', {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const signup = (
  email,
  password,
  mentorOrMentee,
  skills
) => async dispatch => {
  let res
  try {
    res = await axios.post('/auth/signup', {
      email,
      password,
      mentorOrMentee,
      skills
    })
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const updateUser = (userId, formData) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/users/${userId}`, formData)
    dispatch(updateUserAction(data))
  } catch (err) {
    console.error(err)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      // console.log('userReducer GET_USER action.user: ', action.user)
      return action.user
    case UPDATE_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
