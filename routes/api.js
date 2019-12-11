// Node modules
const express = require('express')
const root = require('app-root-path')
const path = require('path');

// Custom modules
const logger = require('../lib/logger.js')

// Create route
const router = express.Router()

// Handle /api routes -> TODO: write here your code 
router
  .route('/')
  .get((req, res, next) => {

  })
  .post((req, res, next) => {

  })
  .put((req, res, next) => {

  })
  .delete((req, res, next) => {

  })

// Export the router
module.exports = router
