const express = require('express');
const fs = require('fs')
const getRoute = express.Router()
const authentication = require('../authentication')()
const getController = require('../getController')

getRoute.get('/', (req, res) => {
    const content = `<div>
        <h2>
            Welcome to the google function api
        </h2>
        <h4>
            API Documention?
        </h4>
        <p><a href='https://documenter.getpostman.com/view/11518931/TVmQcvQf
        '>Please use this link</a></p>
    </div>`
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(content);

})

getRoute.get('/operation/get/:id', authentication.authenticate, authentication.validate, getController.getPostById)

getRoute.get('/operation/get', authentication.authenticate, authentication.validate, getController.getAllPost)

module.exports = getRoute