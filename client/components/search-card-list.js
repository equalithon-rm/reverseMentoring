import React from 'react'
import {Content, Media, Box} from 'react-bulma-components'
import axios from 'axios'
import {Link} from 'react-router-dom'

import {
  Section,
  Heading,
  Image,
  Tile,
  Button
} from 'react-bulma-components/full'

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
  return (
    <Box size="4by3">
      <Media>
        <Media.Item>
          <Content>
            <Link className="link-profile" to={`/connect/${curUser.user.id}`}>
              <h3>{curUser.user.fullName}</h3>
            </Link>
            <h5>{curUser.user.currentCompany}</h5>
            <p>{curUser.user.currentPosition}</p>
            <p>{curUser.user.bio}</p>

            {/* <button
              className="searchCardButton button is-warning is-focused is-small is-rounded"
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
              </button> */}

            <Button
              className="searchCardButton"
              renderAs="a"
              size="medium"
              color="dark"
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
            </Button>
            <br />
            <br />
            <a
              href={`https://calendly.com/${curUser.user.calendlyUsername}`}
              alt="Calendly Sign Up"
              target="_blank"
              rel="noopener noreferrer"
              style={{textDecoration: 'none'}}
            >
              {/* <button
                className="searchCardButton button is-warning is-focused is-small is-rounded"
                type="button"
                disabled={!curUser.user.calendlyUsername}
              >
                Schedule a meeting on Calendly
              </button> */}

              <Button
                renderAs="a"
                size="medium"
                color="dark"
                disabled={!curUser.user.calendlyUsername}
              >
                Schedule a meeting on Calendly
              </Button>
            </a>
          </Content>
        </Media.Item>
      </Media>
    </Box>
  )
}

export default SearchCardList
