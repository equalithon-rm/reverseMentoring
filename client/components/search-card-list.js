import React from 'react'
import {Content, Media, Box} from 'react-bulma-components'
import axios from 'axios'

const handleClick = async (email, targetName, userName) => {
  await axios.post('/api/sendEmail', {email, targetName, userName})
  console.log(email, targetName, userName)
}

const SearchCardList = props => {
  const {curUser, currentUserName} = props

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
                  curUser.user.fullName,
                  currentUserName
                )
              }}
            >
              Send a request to connect
            </button>
          </Content>
        </Media.Item>
      </Media>
    </Box>
  )
}

export default SearchCardList
