const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8888;

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.get('/bundle.js', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'dist/bundle.js'));
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});