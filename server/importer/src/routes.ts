import * as Router from 'koa-router'

const router = new Router()

router.get('/', async context => {
  context.status = 200
  context.body = 'Hello World'
})

router.get('/import', async context => {
  context.status = 200
  context.body = 'Import command sent!'
})

export const routes = router.routes()
