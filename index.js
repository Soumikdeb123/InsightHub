const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('InsightHub Backend is Running 🚀');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
