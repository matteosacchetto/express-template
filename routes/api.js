// Node modules
const express = require('express')
const root = require('app-root-path')
const httpStatusCodes = require('http-status-codes')

// Custom modules
const logger = require(`${root}/lib/logger.js`)
const utils = require(`${root}/lib/utils.js`)

// Create route
const router = express.Router()

// Handle /api routes -> TODO: write here your code
router
  .route('/')
  .get((req, res, next) => {
    res
      .status(200)
      .send(utils.createResponse(200,{ method: req.method }))
  })
  .post((req, res, next) => {
    res
      .status(200)
      .send(utils.createResponse(200,{ method: req.method }))
  })
  .put((req, res, next) => {
    res
      .status(200)
      .send(utils.createResponse(200,{ method: req.method }))
  })
  .delete((req, res, next) => {
    res
      .status(200)
      .send(utils.createResponse(200,{ method: req.method }))
  })

// Export the router
module.exports = router
