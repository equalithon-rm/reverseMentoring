import axios from 'axios'

/**
 * ACTION TYPES
 */
const GETTING_PROFILE = 'GETTING_PROFILE'
const GOT_PROFILE = 'GOT_PROFILE'

const GETTING_PROFILES = 'GETTING_PROFILES'
const GOT_PROFILES = 'GOT_PROFILES'

/**
 * ACTION CREATORS
 */

const gettingProfiles = () => ({
  type: GETTING_PROFILES
})

const gotProfiles = usersProfiles => ({
  type: GOT_PROFILES,
  usersProfiles
})

const gettingProfile = () => ({
  type: GETTING_PROFILE
})

const gotProfile = userProfile => ({
  type: GOT_PROFILE,
  userProfile
})

/**
 * THUNKS
 */

export const fetchProfiles = () => {
  return async dispatch => {
    try {
      dispatch(gettingProfiles())
      const {data} = await axios.get('/api/users')
      dispatch(gotProfiles(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const fetchOneProfile = userId => {
  return async dispatch => {
    try {
      dispatch(gettingProfile())
      const {data} = await axios.get(`/api/users/${userId}`)
      dispatch(gotProfile(data))
    } catch (error) {
      console.log(error)
    }
  }
}

const initialState = {
  loading: false,
  profiles: [],
  profile: {}
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_PROFILES:
      return {...state, loading: true}
    case GOT_PROFILES:
      return {...state, loading: false, profiles: action.usersProfiles}
    case GETTING_PROFILE:
      return {...state, loading: true}
    case GOT_PROFILE:
      return {...state, loading: false, profile: action.userProfile}
    default:
      return state
  }
}

export default profileReducer
