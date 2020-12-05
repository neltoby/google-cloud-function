const express = require('express');
const putRoute = express.Router()
const authentication = require('../authentication')()
const putController = require('../putController')

putRoute.put('/operation/put/:id', authentication.authenticate, authentication.validate, putController.post)


module.exports = putRoute