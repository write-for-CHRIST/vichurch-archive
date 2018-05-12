import gql from 'graphql-tag'
import {client} from './graphql'

export const login = async ({email, password}) => {
  return await client.mutate({
    mutation: gql`
      mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          user {
            name
          }
          token
        }
      }
    `,
    variables: {
      email: email,
      password: password
    }
  })
}
