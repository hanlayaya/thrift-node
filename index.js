var thrift = require('thrift');
// 引入thrift生成的接口文件
const AppService = require("./gen-nodejs/App")
const actions = {
    add: function(info, callback) {
        let str = `${info.name}现在${info.age}岁，再过50年${info.age + 50}岁`
        callback(null, str)
        // return str
    }
}

// 支持rpc调用
var nodeServer = thrift.createServer(AppService, actions);
nodeServer.on('error', function(err){
    console.log(err);
});
nodeServer.listen(7420);
console.log('node server started... port: ' + 7420);




// 支持http调用
var httpServer = thrift.createWebServer({
    cors: {'*': true}, //配置跨域访问
    services: {
        '/thrift': { //配置路径映射
            transport: thrift.TBufferedTransport,
            protocol: thrift.TJSONProtocol,
            processor: AppService,
            handler: actions
        }
    }
});
httpServer.on('error', function(err) {
    console.log(err);
});
httpServer.listen(7421);
console.log('http server started... port: ' + 7421);