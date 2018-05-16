import * as Koa from 'koa'

import {routes} from './routes'
import {PORT} from './config'
import {getTableData} from './resources/airtable/airtable'
import {getTableChurch} from './resources/airtable/church.airtable'
import {getTableFloor} from './resources/airtable/floor.airtable'

const app = new Koa()
app.use(routes)
app.listen(PORT)

const tableChurch = {name: 'Church', fields: ['domain', 'name', '_floors']}
getTableChurch(tableChurch)

const tableFloor = {name: 'Floor', fields: ['domain', '_church', '_rooms']}
getTableFloor(tableFloor)