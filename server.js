const express = require('express');
const mongoose = require("mongoose");
const axios = require("axios");
const methodOverride = require("method-override");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

axios.get("https://accounts.spotify.com")


app.listen(8000, () => {
    console.log('this works')
})