const formatUserSkillCapture = (userId, interestedIn, currentSkills) => {
  const longest =
    currentSkills.length > interestedIn.length ? currentSkills : interestedIn

  const holdArr = []

  for (let i = 0; i < longest.length; i++) {
    const currSkillsNum = currentSkills[i] || null
    const interestedInNum = interestedIn[i] || null
    holdArr.push({
      userId: userId,
      skillsInterestedInId: interestedInNum,
      skillId: currSkillsNum
    })
  }

  return holdArr
}

module.exports = {
  formatUserSkillCapture
}
