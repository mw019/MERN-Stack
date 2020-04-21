const express = require('express');
const mongoose = require('mongoose');

const app = express();

// single endpoint
app.get('/', (req, res) => res.send('API running'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
