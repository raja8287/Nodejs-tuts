const http=require('http');
const server=http.createServer((req,resp)=>{
    if(req.url=='/'){
resp.end('Welcome to our home page')
}
if(req.url=='/about'){
    resp.end('Welcome to our about page')

}
resp.end('<h1>Page not found</h1>')


})
server.listen(5000)