
const http=require('http')
const fs=require('fs');

let server = http.createServer(function(req,res){
   // Asynchronus way
   if(req.url=="/"){
      fs.readFile('Home.html',function(error,data){
                res.writeHead(200,{'Contentent-Type':'text/html'});
                res.write(data)
                res.end()
             })
            } else if(req.url =="/About"){
             fs.readFile('about.html',function(error,data){
               res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data)
                res.end()
             })   
      } else if(req.url=="/Portfolio"){
       fs.readFile('portfolio.html',function(error,data){
         res.writeHead(200,{'Content-Type':'text/html'});
         res.write(data)
         res.end()
       })  
   } else if(req.url=="/Service"){
      fs.readFile('service.html',function(error,data){
         res.writeHead(200,{'Content-Type':'text/html'});
         res.write(data)
        res.end();
      })        
   }
})

server.listen(8000)

console.log('Server is running');