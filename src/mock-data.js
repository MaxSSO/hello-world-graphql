const faker = require('faker')

function users(amount = 10) {
  return (new Array(amount)).fill('item').map(() => ({
    _id: faker.random.uuid(),
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    city: faker.address.city()
  }))
}

module.exports = {
  users
}
