const formatUserSkillCapture = (userId, arr) => {
  const holdArr = []

  for (let i = 0; i < arr.length; i++) {
    holdArr.push({
      userId: userId,
      skillId: arr[i]
    })
  }

  return holdArr
}

module.exports = {
  formatUserSkillCapture
}
