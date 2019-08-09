import axios from 'axios'

// ACTION TYPES //

const GET_SKILLS = 'GET_SKILLS'

// ACTION CREATORS //

const getSkills = skill => ({type: GET_SKILLS, skill})

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

//INIITIAL STATE //

const initialState = {
  skills: []
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
