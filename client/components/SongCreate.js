import React, { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

const SongCreate = () => {
  const [title, setTitle] = useState('')

  const [addSongMutation] = useMutation(mutation)

  const onSubmit = (e) => {
    e.preventDefault()

    addSongMutation({
      variables: {
        title,
      },
    })
  }

  return (
    <div>
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

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`

export default SongCreate
