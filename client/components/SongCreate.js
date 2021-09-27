import React, { useState } from 'react'

const SongCreate = () => {
  const [title, setTitle] = useState('')

  return (
    <div>
      <h3>Create a New Song</h3>
      <form>
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
