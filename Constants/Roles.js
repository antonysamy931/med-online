var Enums = require('enum');
var Roles = new Enums({
    "med_admin":"medadmin",
    "admin":"admin"},
    {ignoreCase: true});

module.exports = Roles;