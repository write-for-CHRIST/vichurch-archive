import {GraphQLServer} from 'graphql-yoga'
import {Prisma} from './generated/prisma'
import {startProxyServer} from './proxy'
import resolvers from './resolvers'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: 'http://localhost:4466', // the endpoint of the Prisma API (value set in `.env`)
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      // secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
    }),
  }),
})

startProxyServer().then(() => {
  server.start(() => console.log(`Server is running on http://localhost:4000`))
})
