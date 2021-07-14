# 简介
### 基于Thrift 的Node服务，支持http和rpc两种方式调用

# 项目结构
|-----client      客户端调用示例
|-----app.thrift  IDL文件，定义接口信息
|-----index.js    服务端入口文件
|-----gen-js      用于js的接口文件
|-----gen-nodejs  用于node的接口文件
|-----gen-java    用于java的接口文件
|-----package.json

# 服务端运行命令
```
npm run serve
```

# 客户端rpc调用
```
node ./client/node_client.js
```

# 客户端http调用
```
运行client下的html文件即可
```
