//PRACTICE FOR READ AND WRITE - SYNC

// const fs = require('fs');

// const filein= fs.readFileSync('./starter/txt/b2.txt', 'utf-8')

// console.log(filein)


// const data = 'kunle mofucking'

// const fileout = fs.writeFileSync('./starter/txt/b5.txt', `${data}` )
// console.log('file written')


//  Practice for async chronous

// const fs = require('fs')
// fs.readFile('./starter/txt/b5.txt', 'utf-8', (err, data) => {
//     console.log(data);
//     fs.readFile('./starter/txt/b3.txt', 'utf-8', (err, data1) => {
//     console.log(data1);


//     fs.writeFile('./starter/txt/b7.txt', `${data}.\n${data1}`, (err) => {
//         console.log('file written successfully');
//     })


// })
    
// });


// console.log('This is run forst before the specified file path in read file');




//practice for setting up server
const http = require('http');
const url = require('url')
const server = http.createServer((req,res) => {
    const pathName = req.url;

    if (pathName == '/' || pathName == '/overview'){

        res.end('this is the overview');}
        else if (pathName == '/kunki'){
            res.end('this kunle');
        }
        else{res.writeHead(404, {'content-type':'text',
            'my-own-header' : 'mofucka'
        })
        res.end('<h1>page not found</h1>')
    
    
    }
    
    }
);
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to port on 8000')
})


// Routing 




