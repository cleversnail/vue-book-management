const jwt = require('express-jwt')
const { PRIVATE_KEY } = require('../utils/constant')

module.exports = jwt({
  secret: PRIVATE_KEY,
  credentialsRequired: true, // 设置成false就不会进行检验，游客也可以登录
}).unless({
  path: [
    '/',
    '/vue-element-admin/user/login'
  ]
})