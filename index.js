// http
var http = require("http");
// Crear un servidor basico 
var server = http.createServer(function(req, res){
    // Armar la respueta http
    // Armar un emcabezado http
    res.writeHead(200,{
        "Content-Type" : "Text/plain",
        "Server" : "ITGAM@4.2.4"
    });
// Enviamos la respueta
res.write("hola mundo");
// Cerra la conexion
res.end();
});
//Poner a trabajar al servers
server.listen(3000,'127.0.0.1', function(){
  console.log("> Server listening @http://localhost:3000 ...");


} );