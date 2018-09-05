const Express = require('express');
const Router = Express.Router();
const Path = require('path');
const Repository = require(Path.join(__dirname, '../Mongo/mongo-init'));

Router.post('/upload-medicine',(req, res, next) => {    
    let RecordLength = req.body.Medicines.length;    
    let Response = [];    
    req.body.Medicines.forEach((element, index) => {        
        setTimeout(() => {
            Repository.Medicine.AddOrUpdate(element).then((result) => {
                element["result"]="Success";
                element["action"]=result.Action;  
                element["response"]= result.Action + " Successfully";
                Response.push(element);                            
                if(RecordLength == Response.length){
                    res.status(200).send(Response);
                }
            }, (error) => {
                element["result"]="Error";
                element["action"]=error.Action;
                element["response"]=error.Response;
                Response.push(element);
                if(RecordLength == Response.length){
                    res.status(200).send(Response);
                }
            });               
        }, 1000); 
    });    
});

module.exports = Router;