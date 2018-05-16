import * as Router from 'koa-router'
import {getTableChurch} from './resources/airtable/church.airtable'
import {getRecordFloor} from './resources/airtable/floor.airtable'
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
  try {
    const result = await getTableChurch()
    context.status = 200
    context.body = result
  } catch (err) {
    context.status = 404
    context.body = 'Loi roi'
  }
})

router.get('/floor', async context => {
  context.body = 'Not yet implemented!'
})

router.get('/floor/:id', async context => {
  try {
    const id = context.params.id
    const result = await getRecordFloor({id})
    context.status = 200
    context.body = result
  } catch (err) {
    context.body = err
  }
})

export const routes = router.routes()
