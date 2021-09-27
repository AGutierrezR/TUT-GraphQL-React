import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const SongList = ({ data }) => {
  const { loading, songs } = data
  const renderSongs = () => {
    return (
      <ul>
        {songs.map((song) => {
          return <li>{song.title}</li>
        })}
      </ul>
    )
  }

  return <div>{loading || renderSongs()}</div>
}

const query = gql`
  {
    songs {
      title
    }
  }
`

export default graphql(query)(SongList)
