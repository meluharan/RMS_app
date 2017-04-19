'use strict';

const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.use(express.static('/public'));

app.listen(3000);

// home route
app.get('/', (req, res) => {
    res.render('home')
});
// About page
app.get('/about', (req, res) => {
    res.render('about')
});
// 404 catch-all handler (middleware)
app.use((req, res, next)=> {
    res.status(404);
    res.render('404');
});
// 500 error handler (middleware)
app.use((err, req, res, next)=> {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});