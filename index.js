const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');
const slugify = require('slugify');

// Slugify is the last of a url that contains a unique resource which the website is showing

const replaceTemplate = require('./modules/replaceTemplate');
//  http gives us networking capabilities

// // BLOCKING SYNCHRONOUS WAY

// // const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8')

// // console.log(textIn);

// // const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`
// // ''''
// // fs.writeFileSync('./starter/txt/output.txt',textOut);
// // console.log('File written!');

// // practice read and write to file

// // read

// // const fs = require('fs')
// // const a1 = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// // console.log(a1)

// // // write

// // const a2 = 'Kunle is the greatest web programmer on earth'
// // b2 = fs.writeFileSync('./starter/txt/b2.txt', a2)
// // console.log(b2)

// // NON-BLOCKING ASYNCHRONOUS WAY
// const  fs = require('fs');

// fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) return console.log('wahala')
//     fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./starter/txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('./starter/txt/final.txt',`${data2}/n${data3}`, 'utf-8', (err) => {
//                 console.log('your file has been written')

//             } )
//         })

// });
// });
// console.log('this is what i mean')

// /////////////////////

// SERVER

// Basically here we are creating a fucntion which will take two things
//  a string(temp) and a data object (product)
// so basically we are saying replace thi string with this data

const data = fs.readFileSync('./starter/dev-data/data.json', 'utf-8');
const dataObj = JSON.parse(data);
const tempCard = fs.readFileSync(
  './final/templates/template-card.html',
  'utf-8'
);
const tempOverview = fs.readFileSync(
  './final/templates/template-overview.html',
  'utf-8'
);
const tempProduct = fs.readFileSync(
  './final/templates/template-product.html',
  'utf-8'
);

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.log(slugs);
const server = http.createServer((req, res) => {
  // This will assign query and pathname to their values in result of url.parse
  const { query, pathname } = url.parse(req.url, true);

  // Overview Page
  if (pathname == '/' || pathname == '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });

    //  so here basically we are calling .map method on dataobj so that for each element in the datobj
    //  use each object to fill temp card based on how each fill is described using replace template
    const cardsHtml = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output)

    // Product Page
  } else if (pathname == '/product') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  }
  // API
  else if (pathName == '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  }

  //  NOT FOUND
  else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>page not found!</>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('listening to request on port 8000');
});

//ROUTING
