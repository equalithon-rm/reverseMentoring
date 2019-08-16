import React from 'react'

export const SkillsListName = props => {
  const {skills} = props
  return (
    <div>
      {skills.length
        ? skills.map(skill => {
            return <tr key={skill.id}> • {skill.name}</tr>
          })
        : ''}
    </div>
  )
}

export const SkillsListBox = props => {
  const {skills, skillType} = props
  return (
    <div className="checkBox">
      {skills.length
        ? skills.map(skill => {
            return (
              <tr key={skill.id}>
                <input
                  type="checkbox"
                  name={skillType}
                  value={skill.name}
                  id={skill.id}
                />
              </tr>
            )
          })
        : ''}
    </div>
  )
}
