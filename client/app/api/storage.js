import {SecureStore} from 'expo'

export const get = async ({key}) => {
  const value = await SecureStore.getItemAsync(key)
  return {value: JSON.parse(value)}
}

export const set = async ({key, value}) => {
  await SecureStore.setItemAsync(key, JSON.stringify(value))
}
