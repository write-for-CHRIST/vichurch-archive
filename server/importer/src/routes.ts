import * as Router from 'koa-router'
import {getTableData} from './resources/airtable/airtable'

const router = new Router()

router.get('/', async context => {
  context.status = 200
  context.body = 'Hello World'
})

router.get('/import', async context => {
  context.status = 200
  context.body = 'Import command sent!'
})

router.get('/church', async context => {
  context.status = 200
  const tableChurch = {name: 'Church', fields: ['domain', 'name', '_floors']}
  const result = await getTableData(tableChurch)
  context.body = result
})
export const routes = router.routes()
