// 工具类
const { env } = require('./env')
const UPLOAD_PATH = env === 'dev' ? '/Users/pengshicong/Documents/金秋班/vue/vue-book-management/admin-book-node/admin-upload-ebook' : '/root/upload/admin-upload/ebook';

module.exports = {
  CODE_ERROR: -1,
  CODE_SUCCESS: 0,
  CODE_TOKEN_EXPIRED: -2,
  debug: true,
  PWD_SALT: 'admin-book-node',
  PRIVATE_KEY: 'vue-book-node-test-wn',
  JWT_EXPIRED: 60 * 60,
  UPLOAD_PATH
}