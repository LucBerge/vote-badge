const express = require('express')
const app = express()
const database = require('./database.js')
const db = new database.Database(process.env.BUCKET)
const badge = require('./badge.js')
const bodyParser = require('body-parser');

app.use(bodyParser.json())

//Vote
app.get('/vote/:key', async (req,res) => {
  const key = req.params.key
  const new_value = await db.increment_vote(key)

  if(new_value != null) {
    console.log(`Increment vote: ${key} = ${new_value}`)
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
	console.log(`Count vote: ${key} = ${value}`)
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
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`index.js listening at http://localhost:${port}`)
})
