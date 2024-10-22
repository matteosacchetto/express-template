# Express template

**NodeJS template** for building an **express** based server



## Table of contents

* [Setup](#setup)
  + [Set a LICENSE](#set-a-license)
  + [Update the package.json](#update-the-packagejson)
  + [Install the dependencies](#install-the-dependencies)
  + [Start the application](#start-the-application)
* [Environment variables](#environment-variables)
* [Modules](#modules)
  + [Express](#express)
  + [Http and Https](#http-and-https)
  + [Morgan](#morgan)
  + [Winston](#winston)
  + [App root path](#app-root-path)
  + [Helmet](#helmet)
  + [Compression](#compression)
  + [Http status codes](#http-status-codes)
  + [Express rate limit](#express-rate-limit)
  + [Dotenv](#dotenv)
  + [HPP](#hpp)
  + [Express-mung](#express-mung)
* [Dev modules](#dev-modules)
  + [Nodemon](#nodemon)



## Setup

Once the repository has been initialized from this template, or the template has been cloned, execute the following steps:



### Set a LICENSE

By default i configured the template to use a MIT license, but if you want to use a different license, change the LICENSE file and the `license: "MIT"` attribute of the [package.json](package.json) file.



### Update the package.json

In particular you **need** to modify/set the following attributes of the [package.json](package.json):

* name
* version [OPTIONAL]
* description
* author
* contributors [OPTIONAL]
* license



### Install the dependencies

You can install the dependencies by running the following command

```bash
npm install
```

This will take a while.



### Start the application

You can start the application in two different ways

If you want hot reload, that is available through [nodemon](https://www.npmjs.com/package/nodemon) using the dev script

```bash
npm run dev
```

or using nodemon directly

```bash
nodemon .
```



Otherwise, if you want to start the server without hot reloading, you can either use the start script

```bash
npm start
```

or you can use node directly

```bash
node .
```



By default this will start a server on http://localhost:8000. 

To modify these values you can simply create a .env file containing all required settings.

For example:

```
# Settings HTTP
USE_HTTP=true
PORT=4464
```


To see a richer example of the .env file take a look at the [.env.example](../.env.example) file in the root folder of the project




## Environment variables

These are the environment variables that can be defined in the .env file

* **USE_HTTP**: to specify whether to start a HTTP server or not. (_default: **true**_)
  * **false**: do **not** start the HTTP server
  * **true**: do start the HTTP server
* **PORT**: the port on which the HTTP server will listen (_default: **8000**_)
* **USE_HTTPS**: to specify whether to start a HTTPS server or not. (_default: **false**_)
  * **false**: do **not** start the HTTPS server
  * **true**: do start the HTTPS server
* **PORT_HTTPS**: the port on which the HTTPS server will listen (_default: **44300**_)
* **NODE_ENV**: the environment {development, production} (_default: **development**_)
* **SSL_KEY_PATH**: to specify the path to the ssl key to use.  (_default **'ssl/key.pem'**_)
  **NOTE**: it is only used if the **NODE_ENV** is set to _production_ and **USE_HTTPS** is set to _true_
* **SSL_CERT_PATH**: to specify the path to the ssl certificate to use.  (_default **'ssl/cert.pem'**_)
  **NOTE**: it is only used if the **NODE_ENV** is set to _production_ and **USE_HTTPS** is set to _true_
* **USE_STATIC**: to specify whether to serve static files or not. (_default: **false**_)
  * **false**: do **not** server static files
  * **true**: do serve static files
* **SERVE_SPA**: to specify whether the static files are of a Single Page Application (SPA) or not. (_default: **false**_)
  * **false**: they are **not** files of a SPA
  * **true**: they are files of a spa
* **STATIC_PATH**: the path of the folder which contains static files. The path is relative with respect to the project folder (_default: **client/public**_)
* **USE_STDOUT**: specifies whether to log to files or to stdout (useful when in a docker container). (_default: **false**_)
* **APP_ROOT_PATH**: this is used to identify the root directory of the source code of the server. There is no need to specify it, since it is able to auto-decalare it, but it is available if for some reason you want to specify it. (default: **.**)




## Modules

### Express

Module used to create a server/RESTful API

* Version: 4.21.1
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
* Version: 1.10.0
* Website: https://www.npmjs.com/package/morgan
* Documentation: https://www.npmjs.com/package/morgan
* Module name: **morgan**



### Winston

Module used to define different loggers

Useful together with morgan

* Enviroment variables used:
  * process.env.NODE_ENV: specify the enviroment (_default="development"_)
* Version: 3.15.0
* Website: https://www.npmjs.com/package/winston
* Documentation: https://www.npmjs.com/package/winston
* Module name: **winston**



### App root path

Module used to access the root path from any file, without the need to use '..' and '.'

* Version: 3.1.0
* Website: https://www.npmjs.com/package/app-root-path
* Documentation: https://www.npmjs.com/package/app-root-path
* Module name: **app-root-path**



### Helmet

Module that helps to secure an express-based app by setting various HTTP headers. *It’s not a silver bullet*, but it can help!

* Version: 8.0.0
* Website: https://helmetjs.github.io/
* Documentation: https://helmetjs.github.io/docs/
* Module name: **helmet**



### Compression

Module used to compress responses. Useful especially in production since it helps to improve the performances

* Version: 1.7.4
* Website: https://github.com/expressjs/compression
* Documentation: https://github.com/expressjs/compression
* Module name: **compression**



### Http status codes

Helper module to get http status codes and messages

* Version: 2.3.0
* Website: https://www.npmjs.com/package/http-status-codes
* Documentation: https://www.npmjs.com/package/http-status-codes
* Module name: **http-status-codes**



### Express rate limit

Module to limit the amount of request that can be performed to the server

* Version: 7.4.1
* Website: https://www.npmjs.com/package/express-rate-limit
* Documentation: https://www.npmjs.com/package/express-rate-limit
* Module name: **express-rate-limit**



### Dotenv

Module to load configuration from a .env file

* Version: 16.4.5
* Website: https://www.npmjs.com/package/dotenv
* Documentation: https://www.npmjs.com/package/dotenv
* Module name: **dotenv**


### HPP

Module to protect against HTTP Parameter Pollution attacks.

* Version: 0.2.3
* Website: https://www.npmjs.com/package/hpp
* Documentation: https://www.npmjs.com/package/hpp
* Module name: **hpp**



### Express-mung

Module to create middlewares accessing the body data

* Version: 0.5.1
* Website: https://www.npmjs.com/package/express-mung
* Documentation: https://www.npmjs.com/package/express-mung
* Module name: **express-mung**
