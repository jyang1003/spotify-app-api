const express = require('express');
const mongoose = require("mongoose");
const axios = require("axios");
const qs = require("qs")
const methodOverride = require("method-override");

const app = express();
const redirect_uri = 'http://localhost:8000/callback'
const client_id = 'CLIENT_ID'
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));
// const link = "https://api.spotify.com/v1"
// // axios.get("https://accounts.spotify.com")

// authorize?response_type=code&client_id=
app.get('/login', function(req, res) {
    // var state = generateRandomString(16);
    var scope = 'user-read-private user-read-email';
    res.redirect(`https://accounts.spotify.com/authorize?` +
      qs.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        // state: state
      }));
  });

app.listen(8000, () => {
    console.log('this works')
})