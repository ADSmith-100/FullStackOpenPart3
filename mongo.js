/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log(
    'Please provide the password as an argument: node mongo.js <password>'
  )
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://fullstack:${password}@cluster0.wuszp.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

const numberSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', numberSchema)

const person = new Person({
  name: process.argv[3],
  number: process.argv[4],
})

if (process.argv.length === 3) {
  Person.find({}).then((result) => {
    console.log('phonebook:')
    result.forEach((p) => {
      console.log(p.name, p.number)
    })
    mongoose.connection.close()
  })
} else {
  person.save().then((result) => {
    console.log(`added ${name} number ${number} to phonebook `)
    mongoose.connection.close()
  })
}
