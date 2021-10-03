import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { Link, useHistory } from 'react-router-dom'
import { ADD_SONG, FETCH_SONGS } from '../queries/apolloQueries'

const SongCreate = () => {
  const [title, setTitle] = useState('')
  const history = useHistory()
  const [addSongMutation] = useMutation(ADD_SONG)

  const onSubmit = (e) => {
    e.preventDefault()

    addSongMutation({
      variables: {
        title,
      },
      refetchQueries: [{ query: FETCH_SONGS }],
    }).then(() => history.push('/'))
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
