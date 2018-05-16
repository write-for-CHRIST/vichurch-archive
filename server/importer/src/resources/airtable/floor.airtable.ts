import {getTableData, getRecord} from './airtable'

export const getTableFloor = ({name, fields}) => {
  getTableData({name, fields})
    .then(result => {
      console.log(JSON.stringify(result, null, 2))
    })
    .catch(err => console.error(err))
}

export const getRecordFloor = async ({id}) => {
  const tableFloor = {name: 'Floor', fields: ['id', 'domain', 'name', '_rooms']}
  const record: any = await getRecord({
    tableName: tableFloor.name,
    recordId: id,
    fields: tableFloor.fields
  })
  return {
    ...record.fields,
    id: record.id
  }
}
