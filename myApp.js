require('dotenv').config()
let express = require('express');
let app = express();
console.log("Hello World")

app.get('/', function(req, res) {
  res.send('Hello Express')
})

app.get('/json', function(req, res) {
  const isUppercase =
    String(process.env.MESSAGE_STYLE || '').trim().toLowerCase() === 'uppercase'
  const message = isUppercase ? 'HELLO JSON' : 'Hello json'
  res.json({ message: message })
})


































 module.exports = app;
