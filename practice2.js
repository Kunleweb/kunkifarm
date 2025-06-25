// Practice for the following
// Synchronous Read and Write and and Asynchronous Read and Write 

// Syncchronous Read 

const fs = require('fs');
// const reading = fs.readFileSync('./starter/txt/b2.txt', 'utf-8');
// console.log(reading);

// Syncchronous  Write
// const writein = 'My name is kunki'
// fs.writeFileSync('./starter/txt/b2.txt', writein);
// console.log('File has been written to');


// Asyncchronous Read
// const reada = fs.readFile('./starter/txt/b2.txt', 'utf-8', (err, data)=> {
//     console.log(data) 
    
// }); 

// console.log('This runs first before the file is read')


// Aysnchronus Write 
// data2 = 'Test text for file'
// const writea = fs.writeFile ('./starter/txt/b2.txt', data2, (err, data) => {
//     console.log(data2)
// })

// console.log('this file is been written to')



// Practice setting up server and routing /

const http = require('http');
const path = require('path');
const url = require('url')

const server = http.createServer((req,res) => {
    const pathName = req.url;
    if (pathName == '/' || pathName == '/overview')
    res.end('Whff');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening for requests on port 8000')
});


