const bitcoin = require('bitcoin');

// Bitcoin-core: verifyMessage
function verifyMessage(walletAddress, signature, message){
 response = 'false';
 const client = new bitcoin.Client({
   host: 'localhost',
   port: 8332,
   user: 'user',
   pass: 'password!'
 });
 client.cmd('verifymessage', walletAddress, signature, message, function(err, result, resHeaders) {
   if (err) {
     // console.log(err);
     return console.log("Incorrect submission");
   }
   if (result===true) {
     console.log('Validation passed');
   }  
   console.log(' Validation: ', result);
   response = result;
 })
};