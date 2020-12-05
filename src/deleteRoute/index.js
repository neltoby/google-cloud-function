const express = require('express');
const deleteRoute = express.Router()
const authentication = require('../authentication')()
const deleteController = require('../deleteController')

deleteRoute.delete('/operation/delete/:id', authentication.authenticate, authentication.validate, deleteController.post)


module.exports = deleteRoute