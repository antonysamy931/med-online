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
        Operation.UpdateOne(Address, {_id: data.AddressId}, {
            Address1: data.Address1,
            Address2: data.Address2,
            City: data.City,
            State: data.State,
            Country: data.Country,
            Zipcode: data.Zipcode
        }).then((result) => {
            resolve(result);
        }, (error) => {
            logger.Error(error);
            reject(error);
        })
    },
    UpdatePharmaDetail: (data) =>{
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
    }
}