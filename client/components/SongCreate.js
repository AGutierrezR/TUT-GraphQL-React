import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { Link, hashHistory } from 'react-router'
import { ADD_SONG, FETCH_SONGS } from '../queries/apolloQueries'

const SongCreate = () => {
  const [title, setTitle] = useState('')

  const [addSongMutation] = useMutation(ADD_SONG)

  const onSubmit = (e) => {
    e.preventDefault()

    addSongMutation({
      variables: {
        title,
      },
      refetchQueries: [{ query: FETCH_SONGS }],
    }).then(() => hashHistory.push('/'))
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>Create a New Song</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="">Song Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </form>
    </div>
  )
}

export default SongCreate
