const { querySql } = require('../db')

function login(username, password) {
  return querySql(`select * from admin_user where username='${username}' and password='${password}'`)
}

module.exports = {
  login
}