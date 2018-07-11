const Express = require('express');
let Router = Express.Router();
const path = require('path');
const Repository = require(path.join(__dirname, '../Mongo/mongo-init'));
const jwt = require(path.join(__dirname, '../Helpers/jwt.helper'));
const MailHelper = require(path.join(__dirname,'../Helpers/MailHelper'));
const ApplicationSettings = require(path.join(__dirname, '../application-setting.json'));
const HtmlReader = require(path.join(__dirname, '../Helpers/HtmlReader'));
const HtmlUtil = require(path.join(__dirname, '../Helpers/HtmlUtil'));

Router.post('/login',function(req, res, next){
    Repository.Account.ValidateUser(req.body.UserName, req.body.Password).then((result) => {     
        if(result){
            let Token = jwt.GenerateToken({Name : result.User.Name, 
                UserId: result.User.UserId, 
                Role: result.User.Role});            
                res.status(200).json({Token: Token, Name: result.User.Name});
        }else{
            res.status(404).json('Username or password provide incorrect.');
        }
        
    }, (error) => {
        res.status(500).json(error);
    });    
});

Router.post('/forgetpassword',function(req,res,next){

    var ResetTemplate = HtmlReader.ResetpasswordTemplate();
    var Url = req.protocol+"://"+req.get('host');
    
    Repository.User.GetUserByEmail('medonlice@help.com').then((result) => {
        res.status(200).json(result);
    },        
    (error) => {
        res.status(404).json("User not found");
    });

    let mailOptions = {
        from: ApplicationSettings['from-address'], // sender address
        to: req.body.Email, // list of receivers
        subject: 'Resetpassword', // Subject line        
        html: '<b>Hello world?</b>' // html body
    };

    /*MailHelper.SendMail(mailOptions).then((result) => {
        res.status(200).json(result);
    }, (error) => {
        res.status(500).json(error);
    });*/
});

module.exports = Router;