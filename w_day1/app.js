const express = require('express');
const app = express();
const auth = require('./middleware.js');
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', auth, (req, res) => {
    res.send('About Page');
});

app.get('/contact', auth, (req, res) => {
    res.send('Contact Page');
});

app.get('/products', (req, res) => {
    res.send('Products Page');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});