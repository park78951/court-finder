const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/build'));
app.use(express.static(__dirname + '/public'));

app.use('/search', (_, res) => {
  res.redirect('/');
});

app.use('/courtinfo', (_, res) => {
  res.redirect('/');
});

app.use('*', (_, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const port = process.env.NODE_ENV || 3065;

app.listen(port, () => console.log(`Server is listening on ${port}`));