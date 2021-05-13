// Node modules
const path = require('path')
const dotenv = require('dotenv')

// Load App Settings
dotenv.config()

// Define app root path
process.env.APP_ROOT_PATH =
  process.env.APP_ROOT_PATH || path.join(__dirname, '..')

const config = {
  useHttp: process.env.USE_HTTP
    ? process.env.USE_HTTP.toLowerCase() === 'true'
    : true,
  httpPort: process.env.PORT || 8000,
  useHttps: process.env.USE_HTTPS
    ? process.env.USE_HTTPS.toLowerCase() === 'true'
    : false,
  httpsPort: process.env.PORT_HTTPS || 44300,
  environment: process.env.NODE_ENV || 'development',
  sslKeyPath: process.env.SSL_KEY_PATH || 'ssl/ssl.key',
  sslCertPath: process.env.SSL_CERT_PATH || 'ssl/ssl.cert',
  useStatic: process.env.USE_STATIC
    ? process.env.USE_STATIC.toLowerCase() === 'true'
    : false,
  serveSPA: process.env.SERVE_SPA
  ? process.env.SERVE_SPA.toLowerCase() === 'true'
  : false,
  staticFolder: process.env.STATIC_PATH || 'public',
  useStdout: process.env.USE_STDOUT
    ? process.env.USE_STDOUT.toLowerCase() === 'true'
    : false,
}

/** * Export the configuration object ** */
module.exports = config