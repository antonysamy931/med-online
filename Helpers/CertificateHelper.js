const fs = require('fs');

let Privatekey = fs.readFileSync('cert/PrivateKey.key','utf8');
let Certificate = fs.readFileSync('cert/Certificate.crt','utf8');

var Credentials = {key: Privatekey, cert: Certificate};

module.exports = {
    Credentials : Credentials
};