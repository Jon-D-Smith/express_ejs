const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/cats', (req, res) => {
    const cats = [
        'blue', 'rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats })
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit });
})

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10);
    res.render('random', { num });
})


app.listen(port, () => {
    console.log('connected to express sever on port: ' + port)
})