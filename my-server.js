var http = require("http")
http.createServer(function(req,res){
    res.write("Hi from Pratiksha Wabale.");
    res.end();
}).listen(3000,  function(){
    console.log("server running at port 3000")
})