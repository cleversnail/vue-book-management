# Express 三大基础概念

1. 中间件
中间件就是一个函数， 在请求和响应周期中被顺序调用

2. 路由
应用如何处理请求的一种机制

3. 异常处理
一般来说，就是通过自定义处理中间件来处理请求中的异常


# 项目架构优化
 - npm i boom -S （快速生成报错信息的）


# 搭建https服务
首先，需要将https证书拷贝到node项目中  
https://www.jianshu.com/p/6406584ef018

# express-validator
express-validator是一个很强大的表单验证器，它是validator.js的中间
使用express-validator可以简化POST请求的参数验证

# 生成JWT功能开发
token本质是字符串，用于请求时附带在请求头中，检验请求时候合法以及判断用户身份

- Token 与 Session、Cookie的区别
1. Session 保存在服务端，用于客户端与服务端连接时，临时保存用户信息，当用户释放连接后，Session将被释放；
2. Cookie 保存在客户端，当客户端发起请求时，Cookie会附带在http header中，提供给服务端识别用户身份
3. Token 请求时提供，用来检验用户是否具备访问接口的权限

Token的用途
1. 拦截无效请求，降低服务器处理压力
2. 实现第三方API授权，无需每次都输入用户名密码鉴权
3. 身份校验，防止CSRF攻击

# JWT 简介
JSON Web Token(JWT)是当前非常流行的跨域身份验证解决方案

<!-- reqdHXDdsdnakLUjdHnqiwGVnd.XDdsdnakLUjdHnqiwGkLUjdHnqiwGVndXDdsdn.GVndXDdsdnakLUjdHnqiwGkLUjd -->

JWT一般由三部分组成，
第一部分：HEADER
{
  "alg": 'HS256',
  "type": 'JWT'
}
第二部分：PAYLOAD
{
  "sub": '1234567890',
  "name": 'Tom',
  "iat": '1234546484234'
}
第三部分：VERIFY SIGNATURE
HMACSHA256{
  base64UrlEncode(header) + ' , ' +
  base64UrlEncode(payload),
  adrqweedaf
}

# 生成 JWT Token
npm i jsonwebtoken -S

# JWT 认证
npm i express-jwt -S

# RefreshToken(第三方登录)
