import React from 'react'
import {Link} from 'react-router-dom'
import {Content, Media, Box} from 'react-bulma-components'

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
            <Link
              onClick={() =>
                handleClick(
                  curUser.user.email,
                  curUser.user.fullName,
                  currentUserName
                )
              }
            >
              <button type="button">Send a request to connect</button>
            </Link>
          </Content>
        </Media.Item>
      </Media>
    </Box>
  )
}

export default SearchCardList
