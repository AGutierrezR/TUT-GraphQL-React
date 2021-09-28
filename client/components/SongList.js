import React from 'react'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router'
import { FETCH_SONGS } from '../queries/apolloQueries'

const SongList = () => {
  const { data, loading, error } = useQuery(FETCH_SONGS)

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

export default SongList
