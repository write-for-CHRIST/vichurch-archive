import gql from 'graphql-tag'
import CONFIG from '../constants'
import {load, save} from './storage'
import {client, mutationLogin} from './graphql'

export const login = async ({email, password}) => {
  const authData = await client.mutate({
    mutation: mutationLogin,
    variables: {email: email, password: password},
  })
  return authData.data.login
}

export const checkLogin = async () => {
  const token = await load({key: CONFIG.KEY_AUTH_TOKEN})
  console.log(token)
}

export const authenticate = async ({email, password}) => {
  const {token} = await login({email, password})
  await save({key: CONFIG.KEY_AUTH_TOKEN, value: token})
  return true
}

