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

const onGetRecordSuccess = ({resolve, record}) => {
  console.log(record)
}

const onGetRecordError = ({reject, err}) => {
  console.error(err)
}

export const getTableData = async ({name, fields}) => {
  return new Promise((resolve, reject) => {
    const baseData = base(name)
    const baseResult = baseData.select(selector)
    baseResult.eachPage(onGetTableSuccess({resolve, fields}), onGetTableError({reject}))
  })
}

export const getRecord = async ({tableName, recordId, fields}) => {
  return new Promise((resolve, reject) => {
    const baseData = base(tableName)
    const record = baseData.find(recordId, (err, record) => {
      if (err) {
        onGetRecordError({reject, err})
      }
      onGetRecordSuccess({resolve, record})
    })
  })
}

const onFindTableSuccess = ({resolve, fields}) => (records, fetchNextPage) => {
  const resultFind = []
  records.forEach(record => {
    const data = {}
    for (let i = 0; i < fields.length; i++) {
      data[fields[i]] = record.get(fields[i])
    }
    resultFind.push(data)
  })
  resolve(resultFind)
}
