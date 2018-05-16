import * as Router from 'koa-router'
import {getTableChurch} from './resources/airtable/church.airtable'
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
  const result = await getTableChurch()
  context.status = 200
  context.body = result
})

export const routes = router.routes()
