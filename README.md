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



## Dev modules

### Nodemon

Module used to auto-reload the app when changes are detected

* Version: 2.0.1

* Website: https://nodemon.io/

* Documentation: https://github.com/remy/nodemon#nodemon

