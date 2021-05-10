// Node modules
const express = require('express')
const root = require('app-root-path')

// Custom modules
const logger = require(`${root}/lib/logger.js`)
const httpUtils = require(`${root}/lib/http-utils.js`)

// Create route
const router = express.Router()

// Handle /api/v1 routes -> TODO: write here your code
router
  .route('/')
  .get((req, res, next) => {
    res
      .send(httpUtils.createResponse(200,{ method: req.method }))
  })
  .post((req, res, next) => {
    res
      .send(httpUtils.createResponse(200,{ method: req.method }))
  })
  .put((req, res, next) => {
    res
      .send(httpUtils.createResponse(200,{ method: req.method }))
  })
  .delete((req, res, next) => {
    res
      .send(httpUtils.createResponse(200,{ method: req.method }))
  })

// Export the router
module.exports = router
