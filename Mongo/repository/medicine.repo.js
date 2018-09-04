const Promise = require('bluebird');
const path = require('path');
const Medicine = require(path.join(__dirname,'../mongo-schema/medicine.schema'));
const Operation = require(path.join(__dirname, '../mongo-operation/operation'));
const logger = require(path.join(__dirname, '../../Helpers/Logger'));
const MedicineMapper = require(path.join(__dirname,'../../Mapper/medicine.model.mapper'));

module.exports = {
    AddOrUpdate: (record) => {
        return new Promise((resolve, reject) => {
            Operation.FindOne(Medicine,
                {Name: record.Name, Quantity: record.Quantity, Type: record.Type}).then((result) => {
                    var Model = MedicineMapper.InsertMedicineModel(record);
                    Operation.Insert(Model).then((insResult) =>{
                        resolve(insResult);
                    }, (insError) => {
                        logger.Error(insError);
                        reject(insError);
                    });
            }, (error) => {
                logger.Error(error);
                reject(error);
            });
        });
    }
}