import {getTableData} from './airtable'

export const getTableChurch = async () => {
  try {
    const tableChurch = {name: 'Church', fields: ['domain', 'name', '_floors']}
    const result = await getTableData(tableChurch)
    return result
  } catch (err) {
    console.error(err)
  }
}
