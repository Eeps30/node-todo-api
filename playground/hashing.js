const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

//jwt.sign takes the input data from the user and 'signs' it by hashing it, the second argument
//is the secret or the 'salt' on top of the hash that makes the hashing unique.
//Because this unique secret is unavailable to users and lies in the server, no one can access it
var token = jwt.sign(data, '123abc');
console.log(`Token: ${token}`)

var decoded = jwt.verify(token, '123abc');
console.log('Decoded: ', decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash  = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if(resultHash === token.hash){
//     console.log('Data was not changed');
// }else{
//     console.log('Data was manipulated, don\'t trust it.')
// }