const express = require('express')
const router = require('./router')
const fs = require('fs')
const https = require('https')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', router)

const privateKey  = fs.readFileSync('./https/private.pem', 'utf8');
const certificate = fs.readFileSync('./https/ca.cer', 'utf8');
const credentials = {key: privateKey, cert: certificate};
const httpsServer = https.createServer(credentials, app)
const SSLPORT = 18082;

const server = app.listen(5000, function() {
  const { address, port } = server.address()
  console.log('Http Server is runing on http://%s:%s', address, port)
})

//创建https服务器
httpsServer.listen(SSLPORT, function() {
  console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});

// //可以根据请求判断是http还是https
// app.get('/', function (req, res) {
//   if(req.protocol === 'https') {
//       res.status(200).send('This is https visit!');
//   }
//   else {
//       res.status(200).send('This is http visit!');
//   }
// });