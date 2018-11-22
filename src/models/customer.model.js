let mongoose = require('mongoose')

const server = 'ds039007.mlab.com:39007'
const database = 'test-api-jkeen-v1'
const user = 'jkeen-v1'
const password = 'jkeen-v1'


mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

let CustomerSchema = new mongoose.Schema({
	name: String,
	email: {
		type: String,
		required: true,
		unique: true
	}
})

module.exports = mongoose.model('Customer', CustomerSchema)