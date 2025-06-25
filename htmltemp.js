// The goal of this practice is to build and fill out the templates to buila website
const http = require('http');
const url = require('url');
const fs = require('fs');
const data = fs.readFileSync('./final/dev-data/data.json', 'utf-8');
const dataObj = JSON.parse(data);
const tempCard = fs.readFileSync('./final/templates/template-card.html', 'utf-8')
const tempOverview = fs.readFileSync('./final/templates/template-overview.html', 'utf-8')
const tempProduct = fs.readFileSync('./final/templates/template-product.html', 'utf-8')


const server = http.createServer((req,res) => {
    const pathName = req.url;


    // Overview Page 
    if (pathName == '/' || pathName == '/overview')
        {  res.writeHead(200, {'Content-type': 'text/html'}),
            res.end(tempOverview)}

    else if (pathName == '/api')
        {res.writeHead(200, {'Content-type': 'application/json'}),
    res.end(data)}


    else {res.writeHead(404, {'content-type':'text/html'})
    res.end('404, page not found')} 
        

    




}
    

);

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening for requests on port 8000')
});
