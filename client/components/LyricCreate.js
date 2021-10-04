import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useMutation } from '@apollo/client'
import { ADD_LYRIC_TO_SONG } from '../queries/apolloQueries'

const LyricCreate = ({ songId }) => {
  const [content, setContent] = useState('')
  const [addLyricMutation] = useMutation(ADD_LYRIC_TO_SONG)

  const onSubmit = (e) => {
    e.preventDefault()

    addLyricMutation({
      variables: {
        content,
        songId,
      },
    }).then(() => setContent(''))
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Add a Lyric</label>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </form>
  )
}

LyricCreate.propTypes = {
  songId: PropTypes.string,
}

export default LyricCreate
