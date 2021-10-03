import { gql } from '@apollo/client'

export const ADD_SONG = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`

export const FETCH_SONGS = gql`
  {
    songs {
      id
      title
    }
  }
`

export const GET_SONG = gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
    }
  }
`

export const DELETE_SONG = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`
