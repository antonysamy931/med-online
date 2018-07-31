var express = require('express');
var router = express.Router();
var path = require('path');
const Repository = require(path.join(__dirname, '../Mongo/mongo-init'));

router.post('/addpharmauser', (req, res, next) => {    
    Repository.User.Create(req.body).then((result) => {                
        Repository.Account.Insert(req.body, result._id).then((accountresult) => {
            res.status(200).json(accountresult);
        }, (ex) => {
            res.status(500).json(ex);
        });
    },(error) => {
        res.status(500).json(error);
    });
});

router.get('/getpharmausers', (req, res, next) => {
    Repository.User.GetUserByPharma(req.query.pharmaid).then((result) => {
        res.status(200).json(result);
    }, (error) => {
        res.status(500).json(error);
    });
});

router.get('/getpharmauserbyid', (req, res, next) => {    
    Repository.User.GetUserById(req.query.userid).then((result) => {
        res.status(200).json(result);
    }, (error) =>{                
        res.status(500).json(error);
    });
});

router.post('/updatepharmauserdetail', (req, res, next) => {    
    Repository.User.UpdateUserDetail(req.body).then((result) => {
        res.status(200).json(result);
    }, (error) =>{
        console.log(error);
        res.status(500).json(error);
    }); 
});

router.post('/deletepharmauserdetail', (req, res, next) => {    
    Repository.User.DeleteUserDetail(req.body.userid).then((result) => {
        res.status(200).json(result);
    }, (error) =>{
        console.log(error);
        res.status(500).json(error);
    }); 
});

module.exports = router;