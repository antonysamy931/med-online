const Express = require('express');
const Router = Express.Router();
const Path = require('path');

Router.post('/upload-medicine',(req, res, next) => {    
    req.body.Medicines.forEach(element => {
        console.log(element);
    });    
    res.status(200).send(req.body);
});

module.exports = Router;