const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
})


app.listen(port, () => {
    console.log('connected to express sever on port: ' + port)
})