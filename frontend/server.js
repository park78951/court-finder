const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use('/', express.static(path.join(__dirname, 'public')));
  server.use(express.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(cookieParser());

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const port = prod ? process.env.PORT : 8080;

  server.listen(port, () => {
    console.log(`next+express running on port: ${port}`)
  })
});