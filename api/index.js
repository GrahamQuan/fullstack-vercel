const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/api/env', (req, res) => {
  res.send(process.env.ENV_DATA || '[[server]]');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
