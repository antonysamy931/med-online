const Express = require('express');
const Router = Express.Router();
const path = require('path');
const Repository = require(path.join(__dirname, '../Mongo/mongo-init'));

Router.get('/getpharmas', (req, res, next) => {
    Repository.Pharma.GetPharmas().then((result) => {        
        res.status(200).json(result);
    }, (error) => {        
        res.status(500).json(error);
    })
});

Router.post('/createpharma', (req, res, next) => {
    Repository.Pharma.CreatePharma(req.body).then((result) => {
        res.status(200).json(result);
    }, (error) => {
        res.status(500).json(error);
    })
});

module.exports = Router;