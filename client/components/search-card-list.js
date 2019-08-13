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
            <p>{curUser.user.fullName}</p>
            <Link
              onClick={() =>
                handleClick(
                  curUser.user.email,
                  curUser.user.fullName,
                  currentUserName
                )
              }
            >
              Send a request to connect
            </Link>
          </Content>
        </Media.Item>
      </Media>
    </Box>
  )
}

export default SearchCardList
