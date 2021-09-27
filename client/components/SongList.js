import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const SongList = ({ data }) => {
  const { loading, songs } = data
  const renderSongs = () => {
    return songs.map((song) => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      )
    })
  }

  return <ul className="collection">{loading || renderSongs()}</ul>
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`

export default graphql(query)(SongList)
