require('dotenv').config()
let express = require('express');
let app = express();

app.get('/json', function(req, res) {
  let message = "Hello json"

  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase()
  }

  res.json({ message: message })
})


































 module.exports = app;
