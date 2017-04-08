/*
 * 实现简单的请求响应效果
 */
"use strict"
//在http的模块，创建一个服务端对象
var http = require("http"); 
//创建一个服务
var server = http.createServer(function(request,response){
   //设置请求头
   response.writeHead(200,{
   	'Content-Type':"text/html",
   	 'key':"value"  //类似的键值对
   });
   //发送数据
   response.write("服务端发送给客户端的数据");
   response.end();
});

//启动服务
server.listen(8080,function(error){
   console.log("开始监听8080端口");
})
