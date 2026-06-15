const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Sandy Point Lawn Care backend!' });
});

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
