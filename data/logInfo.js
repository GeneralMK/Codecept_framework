const dotenv = require('dotenv');

dotenv.config();

let invalidCreds={
    username:process.env.INVALIDUSERNAME,
    password:process.env.INVALIDPASSWORD
}
let validCreds={
    username:process.env.USERNAME,
    password:process.env.PASSWORD
}
module.exports={
    invalidCreds,
    validCreds
}