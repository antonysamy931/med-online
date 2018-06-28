const nodemailer = require('nodemailer');
const path = require('path');

const EmailSetting = require(path.join(__dirname, './EmailSettings'));

module.exports = mailhelper = {};

const Transporter = nodemailer.createTransport(EmailSetting);

mailhelper.GetTransporter = function(){
    return Transporter;
}

mailhelper.SendMail = function(mail){
    Transporter.sendMail(mail,(err, info) => {
        if(err){
            console.log(err)
        }else{
            console.log(info);
        }
    });
}