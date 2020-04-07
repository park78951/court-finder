const { logger } = require("./config/logConfig");

const onStart = (message) => {
  logger.info(message);
};

const onSendingErrorMsg = (error) => {
  const msg = error.message;
  const fileName = error.fileName;
  logger.error(`Error on sending message: message=${msg} | errorFrom=${fileName}`);
  logger.error(error);
};

module.exports = {
  onSendingErrorMsg: onSendingErrorMsg,
  onStart: onStart
};