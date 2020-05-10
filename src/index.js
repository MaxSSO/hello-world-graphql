const { graphql, buildSchema } = require('graphql')
const mockData = require('./mock-data')

const schema = buildSchema(`
  type User {
    _id: ID
    name: String
    phone: String
    email: String
    city: String
  }

  type Query {
    users: [User]
  }
`)

const resolvers = {
  users: () => mockData.users(5)
}

const query = `
  {
    users {
      _id
      name
    }
  }
`

graphql(schema, query, resolvers)
  .then(({ data }) => {
    data.users.forEach(user => console.log(user))
  })
  .catch(error => {
    console.error(error)
  })
