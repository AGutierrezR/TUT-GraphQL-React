import { gql } from '@apollo/client'

export const FETCH_USER = gql`
  {
    user {
      id
      email
    }
  }
`
