const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

// var message = 'Tesing SHA256';
// var hash = SHA256(message).toString();
//
// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);
//
// var data = {
//   id: 4
// }
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'secretHashString').toString()
// }
// var resultHash = SHA256(JSON.stringify(token.data) + 'secretHashString').toString();
//
// if (resultHash === token.hash){
//   console.log('Data was not changed');
// }else{
//   console.log('Data compromised');
// }
//

var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
var result = jwt.verify(token, '123abd');
console.log(result);
