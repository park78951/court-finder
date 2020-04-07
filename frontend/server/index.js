const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const decodeJWT = require('./middlewares/decode-jwt');
const renewJWT = require('./middlewares/renew-jwt');
const { onSendingErrorMsg, onStart } = require('../log');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  require('dotenv').config({ path: '../../.env' });

  server.use(express.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(cookieParser());
  server.use(decodeJWT);
  server.use(renewJWT);
  server.use('/', express.static(path.join(__dirname, 'public')));

  server.get('*', (req, res) => {
    if(req.decoded) {
      const { kakaoId, nickname } = req.decoded;
      req.user = { kakaoId, nickname };
    }

    return handle(req, res);
  });

  server.use((err) => {
    onSendingErrorMsg(err);
  });

  const port = 8080;

  server.listen(port, () => {
    onStart(`next+express running on port: ${port}`);
  });
});