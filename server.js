const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/shows', (req, res) => {
    res.header("Content-Type",'application/json');
    res.sendFile(path.join(__dirname, '/data/shows.json'));
})