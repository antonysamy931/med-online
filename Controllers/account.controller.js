const Express = require('express');
let Router = Express.Router();
const path = require('path');
const Repository = require(path.join(__dirname, '../Mongo/mongo-init'));
const jwt = require(path.join(__dirname, '../Helpers/jwt.helper'));

Router.post('/login',function(req, res, next){
    Repository.Account.ValidateUser(req.body.UserName, req.body.Password).then((result) => {        
        let Token = jwt.GenerateToken({Name : result.User.Name, 
            UserId: result.User.UserId, 
            Role: result.User.Role});
            console.log({Token: Token, Name: result.Name})
            res.status(200).json({Token: Token, Name: result.User.Name});
    }, (error) => {
        res.status(500).json(error);
    });    
});

module.exports = Router;