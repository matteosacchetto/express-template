// Modules
const express = require('express')
const http = require('http');
const https = require('https');
const morgan = require('morgan')

// App settings
const httpPort = process.env.PORT || 8000
const httpsPort = process.env.PORT_HTTPS || 44300
const environment = process.env.NODE_ENV || "development"

// Options
const opt_http = true
const opt_https = false

// Create app
const app = express()

// Define middlewares
/*** Morgan ***/
if(environment === "development") {
  app.use(morgan('dev'))
}
else if(environment === "production") {
  app.use(morgan('combined'))
}

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

if(opt_http) {
  // Starting http server
  const httpServer = http.createServer(app);

  httpServer.listen(httpPort, () => {
  	console.log(`HTTP Server running on port ${httpPort}`);
  });
}

if(opt_https) {
  // Certificate
  const privateKey = fs.readFileSync('key.pem', 'utf8');
  const certificate = fs.readFileSync('cert.pem', 'utf8');
  const ca = fs.readFileSync('chain.pem', 'utf8');

  const credentials = {
  	key: privateKey,
  	cert: certificate,
  	ca: ca
  };

  // Starting https server
  const httpsServer = https.createServer(credentials, app);

  httpsServer.listen(httpsPort, () => {
  	console.log(`HTTPS Server running on port ${httpsPort}`);
  });
}
