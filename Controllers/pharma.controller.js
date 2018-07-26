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

Router.get('/getpharmabyid', (req, res, next) => {
    Repository.Pharma.GetPharmaById(req.query.id).then((result) => {
        res.status(200).json(result);
    }, (error) =>{
        res.status(500).json(error);
    });
});

Router.post('/updatepharma', (req, res, next) => {
    var body = req.body;    
    Repository.Pharma.UpdatePharmaDetail(body).then((result) => {
        Repository.Pharma.UpdatePharmaAddress(body).then((address) =>{
            res.status(200).json(address);
        }, (ex) => {
            res.status(500).json(ex);
        });        
    }, (error) => {
        res.status(500).json(error);
    })
});

Router.post('/deletepharma', (req, res, next) => {
    var body = req.body;    
    Repository.Pharma.DeleteAddress(body.AddressId).then((result) => {
        Repository.Pharma.DeletePharma(body.PharmaId).then((pharmaresult) =>{
            res.status(200).json(pharmaresult);
        }, (ex) => {
            res.status(500).json(ex);
        })
    }, (error) => {
        res.status(500).json(error);
    })
});

Router.get('/pharmascount', (req, res, next) => {
    Repository.Pharma.PharmaCount().then((result) => {
        res.status(200).json(result);
    }, (error) => {
        res.status(500).json(error);
    });
});

module.exports = Router;