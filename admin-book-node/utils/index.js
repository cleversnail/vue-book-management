const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('./constant')

function md5(data, key, iv) { //加密
  var key  = CryptoJS.enc.Utf8.parse(key);
  var iv   = CryptoJS.enc.Utf8.parse(iv);
  var encrypted =CryptoJS.AES.encrypt(data,key,
      {
          iv:iv,
          mode:CryptoJS.mode.CBC,
          padding:CryptoJS.pad.Pkcs7
      });
  return encrypted.toString();    //返回的是base64格式的密文
}

// verify
function decoded (req) {
  const authorization = req.get('Authorization')
  let token = ''
  if (authorization.indexOf('Bearer') >= 0) {
    token = authorization.replace('Bearer ', '')
  } else {
    token = authorization
  }
  return jwt.verify(token, PRIVATE_KEY)
}

module.exports = { md5, decoded }