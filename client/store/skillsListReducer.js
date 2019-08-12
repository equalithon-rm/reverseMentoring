import axios from 'axios'

// ACTION TYPES //

const GET_SKILLS = 'GET_SKILLS'

const GOT_SKILLS_USER_HAS = 'GOT_SKILLS_USER_HAS'
const GOT_SKILLS_USER_WANTS = 'GOT_SKILLS_USER_WANTS'

// ACTION CREATORS //

const getSkills = skill => ({type: GET_SKILLS, skill})

const gotSkillsUserHasActionCreator = skills => ({
  type: GOT_SKILLS_USER_HAS,
  skills
})

const gotSkillsUserWantsActionCreator = skills => ({
  type: GOT_SKILLS_USER_WANTS,
  skills
})

//THUNK CREATORS//

export const skills = () => async dispatch => {
  try {
    const res = await axios.get('/api/skills')
    console.log('rest in reducer', res)
    dispatch(getSkills(res.data))
  } catch (error) {
    console.error(error)
  }
}

export const getSkillsUserHasThunkCreator = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/skills/currentSkills')
    console.log('skillsUserHas data: ', data)
    dispatch(gotSkillsUserHasActionCreator(data))
  } catch (error) {
    console.error(error)
  }
}

export const getSkillsUserWantsThunkCreator = () => async dispatch => {
  try {
    const {data} = await axios.get('api/skills/skillsInterestedIn')
    console.log('skillsUserHas data: ', data)
    dispatch(gotSkillsUserWantsActionCreator(data))
  } catch (error) {
    console.error(error)
  }
}

//INIITIAL STATE //

const initialState = {
  skills: [],
  skillsUserHas: [],
  skillsUserWants: []
}

// REDUCER //

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SKILLS:
      return {...state, skills: action.skills}
    default:
      return state
  }
}

export default skillsReducer
