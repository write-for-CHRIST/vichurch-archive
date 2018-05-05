import * as Airtable from 'airtable'
import {AIRTABLE_API_KEY, AIRTABLE_BASE_ID} from '../../config'

const base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(AIRTABLE_BASE_ID)

const selector = {
  view: 'Grid view',
}

const onGetTableSuccess = ({resolve, fields}) => (records, fetchNextPage) => {
  const result = []
  records.forEach(record => {
    const data = {}
    for (let i = 0; i < fields.length; i++) {
      data[fields[i]] = record.get(fields[i])
    }
    result.push(data)
  })
  resolve(result)
}

const onGetTableError = ({reject}) => err => {
  reject(err)
}

export const getTableData = async ({name, fields}) => {
  return new Promise((resolve, reject) => {
    const baseData = base(name)
    const baseResult = baseData.select(selector)
    baseResult.eachPage(onGetTableSuccess({resolve, fields}), onGetTableError({reject}))
  })
}
