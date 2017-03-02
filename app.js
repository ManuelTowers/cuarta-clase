const express = require('express')
const bodyParser =require('body-parser')
const app = express()

const db = []


app.set('view engine', 'pug')
app.set('views', 'templates')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
	res.render('home', {users: db })
})

app.post('/add', function (req, res) {
	const user= req.body
	db.push(user)
	res.redirect('/') 
})
app.listen(3000)
