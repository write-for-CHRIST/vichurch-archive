import {getTableData} from './airtable'
export const getTableChurch = ({name,fields}) => {
  getTableData({name, fields})
  .then(result => {
    console.log(JSON.stringify(result, null, 2))
  })
  .catch(err => console.error(err))
}
