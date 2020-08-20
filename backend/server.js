const express = require('express')
const keys = require('./auth');
var cors = require('cors')
var bodyParser = require('body-parser');


const app = express()

app.use(cors())
app.use(bodyParser.json());

const axios = require('axios');

const port = 5000
var session_url = 'https://api.github.com/user/following/';
var username = 'akash3194';
var password = 'j@@p@@9c#ina';

app.post('/follow', (req, res) => {
    user = req.body.user
    console.log("user:", user)
    axios({
        method: 'put',
        url: session_url + user,
        data: {},
        auth: {
          username: keys.username,
          password: keys.password
        },
      }).then(function(response) {
        res.sendStatus(200)
      })
      .catch(function(error) {
        res.sendStatus(401)
      });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})