const mongoose = require('mongoose');
const Promise = require('bluebird');
const path = require('path');
const Pharma = require(path.join(__dirname,'../mongo-schema/pharma.schema'));
const Address = require(path.join(__dirname,'../mongo-schema/address.schema'));
const Operation = require(path.join(__dirname, '../mongo-operation/operation'));
const logger = require(path.join(__dirname, '../../Helpers/Logger'));

module.exports = {
    GetPharmas: () => {
        return new Promise((resolve, reject) => {
            Operation.FindAll(Pharma, {}).then((result) => {
                resolve(result);
            },(error) => {
                logger.Error(error);
                reject(error);
            });
        });
    },
    CreatePharma: (data) => {
        return new Promise((resolve, reject) => {
            var AddressModel = new Address({
                _id: new mongoose.Types.ObjectId,
                Address1: data.Address1,
                Address2: data.Address2,
                City: data.City,
                State: data.State,
                Country: data.Country,
                Zipcode: data.Zipcode
            });

            var PharmaModel = new Pharma({
                _id: new mongoose.Types.ObjectId,
                Name: data.Name,
                Description: data.Description,
                Address: AddressModel._id,
                CreatedBy: data.CreatedBy
            });

            Operation.Insert(AddressModel).then((res) => {
                Operation.Insert(PharmaModel).then((result) => {
                    resolve(result);
                }, (e) => {
                    logger.Error(e);
                    reject(e);
                })
            },(error) => {
                logger.Error(error);
                reject(error);
            })

        });
    },
    UpdatePharmaAddress: (data) => {
        return new Promise((resolve, reject) => {
            console.log(data.Address._id)
            Operation.UpdateOne(Address, {_id: data.Address._id}, {
                Address1: data.Address.Address1,
                Address2: data.Address.Address2,
                City: data.Address.City,
                State: data.Address.State,
                Country: data.Address.Country,
                Zipcode: data.Address.Zipcode
            }).then((result) => {
                resolve(result);
            }, (error) => {
                logger.Error(error);
                reject(error);
            })
        });        
    },
    UpdatePharmaDetail: (data) =>{
        return new Promise((resolve, reject) => {
            Operation.UpdateOne(Pharma, {_id: data._id}, {
                Name: data.Name,
                Description: data.Description,
                UpdatedBy: data.UpdatedBy,
                updatedDate: new Date()
            }).then((result) => {
                resolve(result);
            }, (error) => {
                logger.Error(error);
                reject(error);
            })
        });        
    }, 
    GetPharmaById: (id) =>{
        return new Promise((resolve, reject) => {
            Operation.FindOneWithPopulate(Pharma, {_id: id}, 'Address').then((result) => {
                resolve(result);
            }, (error) => {
                reject(error);
            })
        });        
    }, DeletePharma: (id) => {
        return new Promise((resolve, reject) => {
            Operation.DeleteOne(Pharma, {_id: id}).then((result) => {
                resolve(result);
            }, (error) => {
                reject(error);
            })
        })
    }, DeleteAddress: (id) =>{
        return new Promise((resolve, reject) => {
            Operation.DeleteOne(Address, {_id: id}).then((result) => {
                resolve(result);
            }, (error) => {
                reject(error);
            })
        });
    }, PharmaCount: () => {
        return new Promise((resolve, reject) => {
            Operation.Count(Pharma, {}).then((result) => {                
                resolve(result);
            }, (error) => {                
                reject(error);
            });
        });
    }    
}