import React from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { Link } from 'react-router'
import { DELETE_SONG, FETCH_SONGS } from '../queries/apolloQueries'

const SongList = () => {
  const { data, loading, refetch } = useQuery(FETCH_SONGS)
  const [deleteSongMutation] = useMutation(DELETE_SONG)

  const onSongDelete = (id) => {
    deleteSongMutation({
      variables: { id },
    }).then(() => refetch())
  }

  const renderSongs = () => {
    const { songs } = data
    return songs.map(({ title, id }) => {
      return (
        <li key={id} className="collection-item">
          {title}
          <i className="material-icons" onClick={() => onSongDelete(id)}>
            delete
          </i>
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
