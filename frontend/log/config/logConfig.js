const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');
const fs = require('fs');

const env = process.env.NODE_ENV;
const logDir = "data";

if(!fs.existsSync(`./log/${logDir}`)) {
  fs.mkdirSync(`./log/${logDir}`);
}

const dailyRotateFileTransport = new transports.DailyRotateFile({
  level: "debug",
  filename: `./log/${logDir}/%DATE%-front-server.log`,
  datePattern: "YYYY-MM-DD",
  maxSize: "1m",
  maxFiles: "7d",
});

const logger = createLogger({
  level: env === 'development' ? "debug" : "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    format.json()
  ),
  tranports: [
    new transports.Console({
      level: "info",
      format: format.combine(
        format.colorize(),
        format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`
        )
      )
    }),
    dailyRotateFileTransport
  ]
});

module.exports = {
  logger: logger,
};