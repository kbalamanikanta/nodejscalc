var http = require( 'http' );
var fs=require('fs');
var ps=require("path");
var applicationPort = 8080;

var WebServer = http.createServer( function( req, res ) {

    var content= {};
    content.code = 200;
    content.type = "text/plain";
    
    console.log(req.url);
    
    if (req.url== "/"){
         content.path = "/public/index.html";
    }
    else{
        content.path = "/public"+req.url;
    }

    switch(ps.extname(content.path)){
        case ".html" : case "" : content.type  = "text/html"; break;
        case ".css" : content.type  = "text/css"; break;
        case ".js" :  content.type  = "text/javascript"; break;
        case ".swf" : content.type  = "application/x-shockwave-flash"; break;
        default :
    }

    content.data = fs.existsSync(__dirname +content.path)?fs.readFileSync(__dirname +content.path):"404";
    res.writeHead( content.code, { 'content-type': content.type });
    res.end(content.data);
    
});

WebServer.listen( applicationPort );
console.log("Connected server localhost:"+applicationPort+" listen.");
