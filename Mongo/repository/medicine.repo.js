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
                    if(result){
                        Operation.UpdateOne(Medicine, {_id: result._id}, 
                            MedicineMapper.UpdateMedicineModel(record, result._id)).then((updateresult) => {
                            resolve({Action: "Update", Response : updateresult});
                        }, (updateerror) => {
                            logger.Error(updateerror);                            
                            reject({Action: "Update", Response : updateerror});
                        });
                    } else {
                        var Model = MedicineMapper.InsertMedicineModel(record);
                        Operation.Insert(Model).then((insResult) =>{                            
                            resolve({Action: "Insert", Response : insResult});                      
                        }, (insError) => {
                            logger.Error(insError);                            
                            reject({Action: "Insert", Response : insError});
                        });   
                    }                 
            }, (error) => {
                logger.Error(error);
                reject(error);
            });
        });
    }
}