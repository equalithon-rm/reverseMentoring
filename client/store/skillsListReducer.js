import axios from 'axios'

// ACTION TYPES //

const GOT_SKILLS = 'GOT_SKILLS'
const GOT_SKILLS_USER_HAS = 'GOT_SKILLS_USER_HAS'
const GOT_SKILLS_USER_WANTS = 'GOT_SKILLS_USER_WANTS'

// ACTION CREATORS //

const gotSkillsActionCreator = skills => ({type: GOT_SKILLS, skills})

const gotSkillsUserHasActionCreator = skillsHas => ({
  type: GOT_SKILLS_USER_HAS,
  skillsHas
})

const gotSkillsUserWantsActionCreator = skillsWants => ({
  type: GOT_SKILLS_USER_WANTS,
  skillsWants
})

//THUNK CREATORS//

export const getSkillsThunkCreator = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/skills')
    console.log('getSkillsThunkCreator data: ', data)
    dispatch(gotSkillsActionCreator(data))
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
    case GOT_SKILLS:
      return {...state, skills: action.skills}
    case GOT_SKILLS_USER_HAS:
      return {...state, skillsUserHas: action.skillsHas}
    case GOT_SKILLS_USER_WANTS:
      return {...state, skillsUserWants: action.skillsWants}
    default:
      return state
  }
}

export default skillsReducer
