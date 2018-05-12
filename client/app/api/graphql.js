import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

export const client = new ApolloClient({uri: 'http://192.168.1.2:4000'})

export const mutationLogin = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        name
      }
      token
    }
  }
`
