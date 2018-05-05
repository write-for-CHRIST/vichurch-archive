import * as Koa from 'koa'

import {routes} from './routes'
import {PORT} from './config'
import {getTableData} from './resources/airtable/airtable'

const app = new Koa()
app.use(routes)
app.listen(PORT)

const tableChurch = {name: 'Church', fields: ['domain', 'name', '_floors']}
getTableData(tableChurch)
  .then(result => {
    console.log(JSON.stringify(result, null, 2))
  })
  .catch(err => console.error(err))

const tableFloor = {name: 'Floor', fields: ['domain', '_church', '_rooms']}
getTableData(tableFloor)
  .then(result => {
    console.log(JSON.stringify(result, null, 2))
  })
  .catch(err => console.error(err))
console.log(`Importer is running on port ${PORT}`)
