var mongoose = require('mongoose');
var path = require('path');
var Medicine = require(path.join(__dirname, '../Mongo/mongo-schema/madicine.schema'));
module.exports = {
    InsertMedicineModel : (data) => {
        var MedicineModel = new Medicine({
            _id: new mongoose.Types.ObjectId,
            Name: data.Name,
            Quantity: data.Quantity,
            Type: data.Type,
            PackageUnit: data.PackageUnit,
            PricePerUnit: data.PricePerUnit
        });
        return MedicineModel;
    }
}