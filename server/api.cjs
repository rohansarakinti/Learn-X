const express = require('express');
const app = express();
const port = 3000;

app.get('/api/status', (req, res) => {
    res.status(200).send('OK');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
