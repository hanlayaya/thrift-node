var thrift = require('thrift');
var service = require("../gen-nodejs/App");
var ttypes = require('../gen-nodejs/app_types');

transport = thrift.TBufferedTransport()
protocol = thrift.TBinaryProtocol()
// Thrift的序列化协议:
// TBinaryProtocol：二进制编码格式进行数据传输
// TCompactProtocol：高效率的、密集的二进制编码格式进行数据传输
// TJSONProtocol： 使用JSON文本的数据编码协议进行数据传输
// TSimpleJSONProtocol：只提供JSON只写的协议，适用于通过脚本语言解析

var connection = thrift.createConnection("127.0.0.1", 7420, {
    transport: transport,
    protocol: protocol
});

connection.on('error', function (err) {
    console.log(false, err);
});

var client = thrift.createClient(service, connection);



var params = new ttypes.Information({
    name: 'Jerry',
    age: 78
});

console.log('参数：')
console.log(params)
console.log('----------------')
client.add(params, function (err, result) {
    console.log('结果：');
    console.log(result)
    if (err) {
        console.log(err);
        return;
    }
});