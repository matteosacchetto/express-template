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
const httpUtils = require('./lib/http-utils.js')

// Custom middlewares
const responseStatus = require('./middlewares/response-status.js');
const apiNotFound = require('./middlewares/api-not-found');

// Custom routes
const apiRoute = require('./routes/api.js')

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 250, // limit each IP to 250 requests per windowMs
  message: httpUtils.createResponse(429)
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
app.use(express.urlencoded({ extended: true })) // Parse application/x-www-form-urlencoded
app.use(express.json()) // Parse application/json
app.use(helmet())
app.use(hpp())

// Define custom middleware
if(config.useStatic) {
  // Define API middlewares
  app.use('/api', limiter); // Apply the limit to all API requests
  app.use('/api', responseStatus); // HTTP response status is coherent with message status
}
else {
  // Use the custom middlewares on all requests
  app.use('/', limiter); // Apply the limit to all API requests
  app.use('/', responseStatus); // HTTP response status is coherent with message status
}

// Define routes -> TODO: write here your code
app.use('/api/v1', apiRoute)

if(config.useStatic) {
  // Define static folder
  app.use(express.static(config.staticFolder))

  if(config.serveSPA) {
    // We want to server a Single Page Application (SPA)
    app.get('*', (req, res) => {
      res.sendFile('index.html', { root: config.staticFolder });
    });
  }
  // Handle '*' on /api
  app.use('/api', apiNotFound); // If a request for the /api/* has not been served => return 404
}
else {
  // Handle '*' on all requests (/)
  app.use('/', apiNotFound); // If a request for the /* has not been served => return 404
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
