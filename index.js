const express = require('express')
const app = express()
const database = require('./database.js')
const db = new database.Database(process.env.BUCKET)
const badge = require('./badge.js')
const bodyParser = require('body-parser');

app.use(bodyParser.json())

ENV_VARIABLES = [
	"PORT",
	"BUCKET",
	"AWS_REGION",
	"AWS_ACCESS_KEY_ID",
	"AWS_SECRET_ACCESS_KEY",
	"AWS_SESSION_TOKEN"
]

function has_env_variables(){
	for(let env_var of ENV_VARIABLES) {
		if(! (env_var in process.env)) {
			return false;
		}
	}
	return true;
}

//Vote
app.get('/vote/:key', async (req,res) => {
  const key = req.params.key
  const new_value = await db.increment_vote(key)

  if(new_value != null) {
    console.log(`Increment vote: ${key} = ${new_value} (from ${process.env.HOSTNAME})`)
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
	console.log(`Count vote: ${key} = ${value} (from ${process.env.HOSTNAME})`)
	res.json(badge.create_badge(key, value));
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
