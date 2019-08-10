import axios from 'axios'

// ACTION TYPES //

const GET_SKILLS = 'GET_SKILLS'
const GET_USERS_WITH_CURRENT_SKILL = 'GET_USERS_WITH_CURRENT_SKILL'

// ACTION CREATORS //

const getSkills = skill => ({type: GET_SKILLS, skill})
const getUsersWithCurrentSkill = skillId => ({
  type: GET_USERS_WITH_CURRENT_SKILL,
  skillId
})

//Think Creators//

export const skills = () => async dispatch => {
  try {
    const res = await axios.get('/skills/')
    console.log('rest in reducer', res)
    dispatch(getSkills(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const currentSkill = skillId => async dispatch => {
  try {
    const res = await axios.get(`/skills/currentSkills/${skillId}`)
    console.log('THUNK DATA', res.data)
    dispatch(getUsersWithCurrentSkill(res.data))
  } catch (error) {
    console.error(error)
  }
}

//INIITIAL STATE //

const initialState = {
  skills: [],
  usersWithCurrentSkill: []
}

// REDUCER //

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SKILLS:
      return {...state, skills: action.skills}
    case GET_USERS_WITH_CURRENT_SKILL:
      return {...state, usersWithCurrentSkill: action.skillId.users}
    default:
      return state
  }
}

export default skillsReducer
