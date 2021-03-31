const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home', { name: "home" });
})


////// Subreddit route

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit, name: "404 Not Found" })
    }

})



/////// Random single serve pages

app.get('/cats', (req, res) => {
    const cats = [
        'blue', 'rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats, name: "cats" })
})

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10);
    res.render('random', { num, name: "random" });
})


app.listen(port, () => {
    console.log('connected to express sever on port: ' + port)
})