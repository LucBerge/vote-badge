const express = require('express')
const app = express()
const database = require('./database.js')
const db = new database.Database(process.env.BUCKET)
const badge = require('./badge.js')
const bodyParser = require('body-parser');
const https = require('https');

app.use(bodyParser.json())

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

//Vote
app.get('/vote/:key', async (req,res) => {
	const key = req.params.key
	const new_value = await db.increment_vote(key)

	if(new_value != null) {
		console.log(`Increment vote: ${key} = ${new_value} (from ${req.headers.host})`)
		res.sendStatus(200).end()
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
			console.log(`Count vote: ${key} = ${value} (from shields.io)`)
			res.json(badge.create_json_badge(key, value))
		}
		else{
			console.log(`Count vote: ${key} = ${value}`)
			const shields_url = badge.create_url_badge(key, value, req.query)
			console.log(`GET request to ${shields_url}`)

			https.get(shields_url, (resp) => {
				let data = '';

				// A chunk of data has been received.
				resp.on('data', (chunk) => {
					data += chunk;
				});

				// The whole response has been received. Print out the result.
				resp.on('end', () => {
					res.send(data).end()
				});

			}).on("error", (err) => {
				res.sendStatus(500).end()
			});
		}
	}
	else {
		res.sendStatus(500).end()
	}
})

//Errors
app.use('*', (req,res) => {
	res.sendStatus(404).end()
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
