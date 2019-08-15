import React from 'react'
import {Content, Media, Box} from 'react-bulma-components'
import axios from 'axios'

const handleClick = async (
  email,
  targetId,
  skillId,
  currUserId,
  currUserName
) => {
  await axios.post('/api/sendEmail', {
    email,
    targetId,
    skillId,
    currUserName,
    currUserId
  })
}

const SearchCardList = props => {
  const {curUser, currentUser} = props
  console.log('PROPS>>> ', props)

  return (
    <Box size="4by3">
      <Media>
        <Media.Item>
          <Content>
            <h3>{curUser.user.fullName}</h3>
            <h5>{curUser.user.currentCompany}</h5>
            <p>{curUser.user.currentPosition}</p>
            <p>{curUser.user.bio}</p>
            <button
              type="button"
              onClick={evt => {
                evt.target.disabled = true
                evt.target.innerHTML = 'Request sent'
                handleClick(
                  curUser.user.email,
                  curUser.user.id,
                  curUser.skillId,
                  currentUser.id,
                  currentUser.fullName
                )
              }}
            >
              Send a request to connect
            </button>
            <span> </span>
            <a
              href={`https://calendly.com/${curUser.user.calendlyUsername}`}
              alt="Calendly Sign Up"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" disabled={!curUser.user.calendlyUsername}>
                Schedule a meeting on Calendly
              </button>
            </a>
          </Content>
        </Media.Item>
      </Media>
    </Box>
  )
}

export default SearchCardList
