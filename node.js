const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(7000, '0.0.0.0', () => {
    console.log('Server is running on port 7000');
});
