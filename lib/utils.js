// Node modules
const httpStatusCodes = require('http-status-codes')

// Create utility object
const utils = {}

// Create utility functions
utils.createResponse = (code, data=undefined) => {
  let res = {
    statusCode: code,
    message: httpStatusCodes.getStatusText(code),
    data: data
  }

  return res
}

module.exports = utils
