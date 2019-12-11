// Modules
const winston = require('winston')
const root = require('app-root-path')

// App settings
const environment = process.env.NODE_ENV || 'development'

// Create the logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: `${root}/logs/error.log`, level: 'error' }),
    new winston.transports.File({ filename: `${root}/logs/app.log` })
  ]
})

// If we are not in production then we log also to console
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }))
}

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function(message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message)
  },
}

module.exports = logger
