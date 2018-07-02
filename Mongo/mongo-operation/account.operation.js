module.exports = {
    Insert : function(account){
        account.save(function(err, account){
            if(err){
                console.log(err);
            }else{
                return account;
            }            
        })
    }
}