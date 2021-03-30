const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10);
    res.render('random', { num });
})


app.listen(port, () => {
    console.log('connected to express sever on port: ' + port)
})