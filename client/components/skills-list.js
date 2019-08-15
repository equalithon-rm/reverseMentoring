import React from 'react'

const SkillsList = props => {
  const {skills, skillType} = props
  return (
    <label className="checkbox">
      {skills.length
        ? skills.map(skill => {
            return (
              <div key={skill.id}>
                <input
                  type="checkbox"
                  name={skillType}
                  value={skill.name}
                  id={skill.id}
                />
                {skill.name}
              </div>
            )
          })
        : ''}
    </label>
  )
}

export default SkillsList
