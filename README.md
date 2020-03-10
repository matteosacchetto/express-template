# Express template

**NodeJS template** for building an **express** based application



## Modules

### Express

Module used to create a server/RESTful API

* Version: 4.17.1
* Website: https://expressjs.com/en
* Documentation: https://expressjs.com/en/4x/api.html
* Module name: **express**



### Http and Https

Modules used to explicitly create a HTTP and HTTPS server

* Enviroment variables used:
  * process.env.PORT: specify the HTTP port (_default=8000_)
  * process.env.PORT_HTTPS: specify the HTTPS port (_default=44300_)
* Version: NodeJS version
* Documentation: 
  * HTTP: https://nodejs.org/api/http.html
  * HTTPS: https://nodejs.org/api/https.html
* Modules name:
  * **http** 
  * **https**



### Morgan

Module used to log HTTP requests

* Enviroment variables used:
  * process.env.NODE_ENV: specify the enviroment (_default="development"_)
* Version: 1.9.1
* Website: https://www.npmjs.com/package/morgan
* Documentation: https://www.npmjs.com/package/morgan
* Module name: **morgan**



### Winston

Module used to define different loggers

Useful together with morgan

* Enviroment variables used:
  * process.env.NODE_ENV: specify the enviroment (_default="development"_)
* Version: 3.2.1
* Website: https://www.npmjs.com/package/winston
* Documentation: https://www.npmjs.com/package/winston
* Module name: **winston**



### App root path

Module used to access the root path from any file, without the need to use '..' and '.'

* Version: 3.0.0
* Website: https://www.npmjs.com/package/app-root-path
* Documentation: https://www.npmjs.com/package/app-root-path
* Module name: **app-root-path**



### Helmet

Module that helps to secure an express-based app by setting various HTTP headers. *It’s not a silver bullet*, but it can help!

* Version: 3.21.2
* Website: https://helmetjs.github.io/
* Documentation: https://helmetjs.github.io/docs/
* Module name: **helmet**



### Compression

Module used to compress responses. Useful especially in production since it helps to improve the performances

* Version: 1.7.4
* Website: https://github.com/expressjs/compression
* Documentation: https://github.com/expressjs/compression
* Module name: **compression**



### Body-parser

Node.js body parsing middleware

* Version: 1.19.0
* Website: https://github.com/expressjs/body-parser
* Documentation: https://github.com/expressjs/body-parser
* Module name: **body-parser**



### Http status codes

Helper module to get http status codes and messages

* Version: 1.4.0
* Website: https://www.npmjs.com/package/http-status-codes
* Documentation: https://www.npmjs.com/package/http-status-codes
* Module name: **http-status-codes**



### Express rate limit

Module to limit the amount of request that can be performed to the server

* Version: 5.0.0
* Website: https://www.npmjs.com/package/express-rate-limit
* Documentation: https://www.npmjs.com/package/express-rate-limit
* Module name: **express-rate-limit**



### Dotenv

Module to load configuration from a .env file

* Version: 8.2.0
* Website: https://www.npmjs.com/package/dotenv
* Documentation: https://www.npmjs.com/package/dotenv
* Module name: **dotenv**



## Dev modules

### Nodemon

Module used to auto-reload the app when changes are detected

* Version: 2.0.1
* Website: https://nodemon.io/
* Documentation: https://github.com/remy/nodemon#nodemon

