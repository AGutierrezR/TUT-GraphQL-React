import React from 'react'
import { useMutation } from '@apollo/client'
import { LIKE_LYRIC } from '../queries/apolloQueries'

const LyricList = ({ lyrics }) => {
  const [likeLyricMutation] = useMutation(LIKE_LYRIC)

  const onLike = ({ id, likes }) => {
    likeLyricMutation({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1,
        },
      },
    })
  }

  const renderLyrics = () => {
    return lyrics.map(({ id, content, likes }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <span className="vote-box">
            <i className="material-icons" onClick={() => onLike({ id, likes })}>
              thumb_up
            </i>
            {likes}
          </span>
        </li>
      )
    })
  }

  return <ul className="collection">{renderLyrics()}</ul>
}

export default LyricList
