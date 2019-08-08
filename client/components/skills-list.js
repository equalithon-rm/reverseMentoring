import React from 'react'

const SkillsList = props => {
  const {skills, skillType} = props
  return (
    <div>
      {skills.length
        ? skills.map(skill => {
            return (
              <div key={skill.id}>
                {skill.name}
                <input type="checkbox" name={skillType} value={skill.name} />
              </div>
            )
          })
        : ''}
    </div>
  )
}

export default SkillsList
