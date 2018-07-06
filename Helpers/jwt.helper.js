const path = require('path');
const JWT = require('jsonwebtoken');

const ApplicationSetting = require(path.join(__dirname, '../application-setting.json'));

const JWT_KEY = ApplicationSetting['jwt-key'];

module.exports = {
    GenerateToken: (data) => {
        return JWT.sign(JSON.stringify(data),JWT_KEY);
    },
    GetData: (token) => {
        return JWT.verify(token, JWT_KEY);
    }
}