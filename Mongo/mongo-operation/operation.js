const Promise = require('bluebird');

module.exports = {
    Insert : function(type){
        return new Promise(function(resolve, reject){
            type.save(function(err, type){
                if(err){
                    reject(err);
                }else{
                    resolve(type);
                }            
            })
        }); 
    },
    FindAll: function(type, query){
        return new Promise(function(resolve, reject){
            type.
            find(query).
            exec(function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            });
        });
    },
    FindOne: function(type, query){
        return new Promise(function(resolve, reject){                
            type.
            findOne(query).            
            exec(function(error, result){
                if(error){                    
                    reject(error);
                }else{                                                          
                    resolve(result);
                }
            });
        });
    },
    FindOneWithPopulate: function(type, query, populate){
        return new Promise(function(resolve, reject){                
            type.
            findOne(query).            
            populate(populate).            
            exec(function(error, result){
                if(error){                    
                    reject(error);
                }else{                                                          
                    resolve(result);
                }
            });
        });
    },
    UpdateOne: function(type, query, setvalue){
        return new Promise(function(resolve, reject){
            type.
            findByIdAndUpdate(query, {$set: setvalue}, (error, result) => {
                if(error){
                    reject(error);                    
                }else{
                    resolve(result);
                }
            });
        });
    },
    DeleteOne: function(type, query){
        return new Promise(function(resolve, reject){
            type.
            deleteOne(query,(error, result)=>{
                if(error){
                    reject(error);                    
                }else{
                    resolve(result);
                }
            });
        });
    },
    Count: function(type, query){
        return new Promise(function(resolve, reject) {
            type.count(query, function(error, result) {                
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            });
        });
    }
}