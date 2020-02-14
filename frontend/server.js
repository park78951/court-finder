const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const {onSendingErrorMsg, onStart} = require('./log');

const dev = process.env.NODE_ENV !== 'production';
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

  server.use((err, req, res, next) => {
    onSendingErrorMsg(err);
  });

  const port = 8080;

  server.listen(port, () => {
    onStart(`next+express running on port: ${port}`);
  });
});