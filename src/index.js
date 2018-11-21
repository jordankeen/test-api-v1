let express = require('express')

let app = express()

let personRoute = require('./routes/person')

let path = require('path')

// chain of middleware functions

app.use((req, res, next) => {
	console.log(`${new Date().toString()} => ${req.originalUrl}`)
	next()
})

app.use(personRoute)

app.use(express.static('public'))

// Handler for 404 - resource not found
app.use((req, res, next) => {
	res.status(404).send(`We think you are lost!`)
})

// Handler for error 500
app.use((err, req, res, next) => {
	console.log(err.stack)
	res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))