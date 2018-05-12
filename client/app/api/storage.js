import {SecureStore} from 'expo'

export const load = async ({key}) => {
  const value = await SecureStore.getItemAsync(key)
  return {value: JSON.parse(value)}
}

export const save = async ({key, value}) => {
  await SecureStore.setItemAsync(key, JSON.stringify(value))
}
