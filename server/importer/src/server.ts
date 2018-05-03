import * as Koa from 'koa'

import {routes} from './routes'
import {PORT} from './config'

const app = new Koa()
app.use(routes)
app.listen(PORT)

console.log(`Importer is running on port ${PORT}`)
