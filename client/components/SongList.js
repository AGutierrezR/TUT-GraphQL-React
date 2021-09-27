import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router'

const SongList = () => {
  const { data, loading, error } = useQuery(query)

  const renderSongs = () => {
    const { songs } = data
    return songs.map((song) => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      )
    })
  }

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <ul className="collection">{renderSongs()}</ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  )
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`

export default SongList
