var mongoose = require('mongoose');
var path = require('path');
var Medicine = require(path.join(__dirname, '../Mongo/mongo-schema/medicine.schema'));
module.exports = {
    InsertMedicineModel : (data) => {
        var MedicineModel = new Medicine({            
            Name: data.Name,
            Quantity: data.Quantity,
            Type: data.Type,
            PackageUnit: data.PackageUnit,
            PricePerUnit: data.PricePerUnit           
        });
        return MedicineModel;
    },
    UpdateMedicineModel : (data, _id) => {
        var MedicineModel = new Medicine({ 
            _id: _id,           
            Name: data.Name,
            Quantity: data.Quantity,
            Type: data.Type,
            PackageUnit: data.PackageUnit,
            PricePerUnit: data.PricePerUnit           
        });
        return MedicineModel;
    }
}