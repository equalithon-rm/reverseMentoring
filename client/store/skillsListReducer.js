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
    dispatch(gotSkillsActionCreator(data))
  } catch (error) {
    console.error(error)
  }
}

export const getSkillsUserHasThunkCreator = skillId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/skills/currentSkills/${skillId}`)
    dispatch(gotSkillsUserHasActionCreator(data.currentSkills))
  } catch (error) {
    console.error(error)
  }
}

export const getSkillsUserWantsThunkCreator = skillId => async dispatch => {
  try {
    const {data} = await axios.get(`api/skills/skillsInterestedIn/${skillId}`)
    dispatch(gotSkillsUserWantsActionCreator(data.skillsInterestedIns))
  } catch (error) {
    console.error(error)
  }
}

//INIITIAL STATE //

const initialState = {
  allSkills: [],
  skillUserHas: {},
  skillUserWants: {}
}

// REDUCER //

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_SKILLS:
      return {...state, allSkills: action.skills}
    case GOT_SKILLS_USER_HAS:
      return {...state, skillUserHas: action.skillsHas}
    case GOT_SKILLS_USER_WANTS:
      return {...state, skillUserWants: action.skillsWants}
    default:
      return state
  }
}

export default skillsReducer
