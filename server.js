const
  express = require('express'),
  app = express()

app.listen(3000, function(err) {
  console.log(err || "Server running on 3000.")
})

app,get('/users', function(req, res) {
  res.send("Users index...")
})

app.get('/users/:id', function(req, res) {
  res.send("Profile page for an user: " + req.params.id)
})