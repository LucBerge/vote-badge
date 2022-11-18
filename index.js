const express = require('express')
const database = require('./database.js')
const badge = require('./badge.js')
const bodyParser = require('body-parser');
const path = require('path');

const app = express()
app.use(bodyParser.json());
app.use('/static', express.static(__dirname + '/static'));

const db = new database.Database(process.env.BUCKET)

ENV_VARIABLES = [
	"PORT",
	"BUCKET",
	"AWS_REGION",
	"AWS_ACCESS_KEY_ID",
	"AWS_SECRET_ACCESS_KEY",
	"AWS_SESSION_TOKEN"
]
SHIELDS_IO_USER_AGENT = 'Shields.io'

function has_env_variables(){
	for(let env_var of ENV_VARIABLES) {
		if(! (env_var in process.env)) {
			return false
		}
	}
	return true
}

function is_shield_io(req) {
	return req.headers['user-agent'].includes(SHIELDS_IO_USER_AGENT)
}

//Index
app.get('/index', async (req,res) => {
	res.sendFile(path.resolve('./static/index.html'))
})

//Vote
app.get('/vote/:key', async (req,res) => {
	const key = req.params.key
	const value = await db.increment_vote(key)

	if(value != null) {
		console.log(`Increment: ${key} = ${value} (from ${req.headers.host})`)
		res.sendFile(path.resolve('./static/vote.html'))
	}
	else {
		res.sendStatus(500).end()
	}
})

//Count
app.get('/count/:key', async (req,res) => {
	const key = req.params.key
	const value = await db.get_vote(key)
	if(value != null) {
		if(is_shield_io(req)){
			console.log(`Count: ${key} = ${value} (from shields.io)`)
			res.json(badge.create_json_badge(key, value))
		}
		else{
			const data = await badge.get_badge(key, value, req.query)
			if(data) {
				console.log(`Count: ${key} = ${value}`)
				res.set('Content-Type', "image/svg+xml")
				res.set('Cache-Control', "no-cache")
				res.send(data).end()
			}
			else {
				res.sendStatus(500).end()
			}
		}
	}
	else {
		res.sendStatus(500).end()
	}
})

//View
app.get('/view/:key', async (req,res) => {
	const key = req.params.key
	const value = await db.increment_vote(key)
	if(value != null) {
		const data = await badge.get_badge(key, value, req.query)
		if(data) {
			console.log(`View: ${key} = ${value}`)
			res.set('Content-Type', "image/svg+xml")
			res.set('Cache-Control', "no-cache")
			res.send(data).end()
		}
	}
	else {
		res.sendStatus(500).end()
	}
})

//Errors
app.use('*', (req,res) => {
	res.redirect('/index');
})

//Start
if(has_env_variables()){
	app.listen(process.env.PORT, () => {
		console.log(`index.js listening at http://localhost:${process.env.PORT}`)
	})
}
else {
	console.log(`In order to start the server, you must set following env variables: ${ENV_VARIABLES.join(', ')}`)
}
