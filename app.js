// Node modules
const express = require('express')
const http = require('http')
const https = require('https')
const fs = require('fs')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const httpStatusCodes = require('http-status-codes')
const rateLimit = require("express-rate-limit")
const hpp = require('hpp')
const dotenv = require('dotenv')

// Load App settings
const config =  require('./lib/config.js')

// Custom modules
const logger = require('./lib/logger.js')
const utils = require('./lib/utils.js')

// Custom routes
const apiRoute = require('./routes/api.js')

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 250, // limit each IP to 250 requests per windowMs
  message: utils.createResponse(429)
})

// Create app
const app = express()

// Define logging middlewares
if(config.environment === 'development') {
  // Middlewares used in development
  app.use(morgan('tiny', { stream: logger.stream }))
}
else if(config.environment === 'production') {
  // Middlewares used in production
  app.use(morgan('combined', { stream: logger.stream }))
  app.use(compression())
}

// Define middlewares
app.use(limiter) // Apply the limit to all requests
app.use(express.urlencoded({ extended: true })) // Parse application/x-www-form-urlencoded
app.use(express.json()) // Parse application/json
app.use(helmet())
app.use(hpp())

// Define routes -> TODO: write here your code
app.use('/api', apiRoute)

if(config.useStatic) {
  // Define static folder
  app.use(express.static('public'))
}

if(config.useHttp) {
  // Starting http server
  const httpServer = http.createServer(app);

  // It listens on port httpPort
  httpServer.listen(config.httpPort, () => {
  	logger.info(`HTTP Server running on port ${config.httpPort}`)
  })
}

if(config.useHttps) {
  // Certificate
  const privateKey = fs.readFileSync(config.sslKeyPath, 'utf8')
  const certificate = fs.readFileSync(config.sslCertPath, 'utf8')

  const credentials = {
  	key: privateKey,
  	cert: certificate
  }

  // Starting https server
  const httpsServer = https.createServer(credentials, app)

  // It listens on port httpsServer
  httpsServer.listen(config.httpsPort, () => {
  	logger.info(`HTTPS Server running on port ${config.httpsPort}`)
  })
}
