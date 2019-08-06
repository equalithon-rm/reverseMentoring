import React from 'react'

const SkillsList = props => {
  const {skills} = props
  return (
    <div>
      {skills.length
        ? skills.map(skill => {
            return (
              <div key={skill.id}>
                {skill.name}
                <input type="checkbox" name="skills" value={skills.name} />
              </div>
            )
          })
        : ''}
    </div>
  )
}

export default SkillsList
