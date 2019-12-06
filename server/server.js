const express = require('express');
const app = express();
const axios = require('axios')

app.use(express.static('dist'));
app.use(express.static('src'));



app.get('/catfacts', (req, res) =>  {
axios.get('https://catfact.ninja/fact')
    .then(response => {
        console.log("this is the data from the back end", response.data)
        let data = response.data;
        res.json(data)
    })
    .catch(err => ('something is wrong', console.log(err)))
})

module.exports = app;