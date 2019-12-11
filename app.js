// Node modules
const express = require('express')
const http = require('http')
const https = require('https')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const bodyParser = require('body-parser')
const httpStatusCodes = require('http-status-codes')
const rateLimit = require("express-rate-limit")

// Custom modules
const logger = require('./lib/logger.js')
const utils = require('./lib/utils.js')

// Custom routes
const apiRoute = require('./routes/api.js')

// App settings
const httpPort = process.env.PORT || 8000
const httpsPort = process.env.PORT_HTTPS || 44300
const environment = process.env.NODE_ENV || 'development'
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 250, // limit each IP to 250 requests per windowMs
  message: utils.createResponse(429)
})

// Options
const opt_http = true
const opt_https = false
const opt_static = false
const opt_reverse_proxy = false

// Create app
const app = express()

// Define middlewares
app.use(limiter) // Apply the limit to all requests
app.use(bodyParser.urlencoded({ extended: false })) // Parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // Parse application/json
app.use(helmet())

if(environment === 'development') {
  // Middlewares used in development
  app.use(morgan('tiny', { stream: logger.stream }))
}
else if(environment === 'production') {
  // Middlewares used in production
  app.use(morgan('combined', { stream: logger.stream }))
  app.use(compression())
}

// Define routes -> TODO: write here your code
app.use('/api', apiRoute)

if(opt_static) {
  // Define static folder
  app.use(express.static('public'))
}

if(opt_http) {
  // Starting http server
  const httpServer = http.createServer(app);

  // It listens on port httpPort
  httpServer.listen(httpPort, () => {
  	logger.info(`HTTP Server running on port ${httpPort}`)
  })
}

if(opt_https) {
  // Certificate
  const privateKey = fs.readFileSync('key.pem', 'utf8')
  const certificate = fs.readFileSync('cert.pem', 'utf8')
  const ca = fs.readFileSync('chain.pem', 'utf8')

  const credentials = {
  	key: privateKey,
  	cert: certificate,
  	ca: ca
  }

  // Starting https server
  const httpsServer = https.createServer(credentials, app)

  // It listens on port httpsServer
  httpsServer.listen(httpsPort, () => {
  	logger.info(`HTTPS Server running on port ${httpsPort}`)
  })
}
