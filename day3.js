const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');
const data = fs.readFileSync('./starter/dev-data/data.json', 'utf-8');
const dataObj = JSON.parse(data);
const overview = fs.readFileSync('./final/templates/template-overview.html', 'utf-8'); 
const card = fs.readFileSync('./final/templates/template-card.html', 'utf-8'); 
const producttemp = fs.readFileSync('./final/templates/template-product.html', 'utf-8'); 

const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);

    if (product.organic) output = output.replace(/%NOT_ORGANIC%/g, 'not-organic');
   return output; 
}

 
// Practice for setting server 

const server = http.createServer((req,res) =>{
    const {query, pathname} = url.parse(req.url, true);
    
    if (pathname == '/' || pathname == '/overview'){
        res.writeHead(200, {'Content-type':'text/html'});

        

    const cardsHtml = dataObj.map( el => replaceTemplate(card, el)).join('');
    const output = overview.replace('{%PRODUCT_CARDS%}', cardsHtml);
         res.end(output);
        
    





    }

    else if (pathname == '/product'){
        res.writeHead(200, {'content-type': 'text/html'});
        const product  = dataObj[query.id];
        const output = replaceTemplate(producttemp, product);
        res.end(output); 
                 

    }
    // else if (){};
    // else if (){};
    // else if (){};
    // else if (){}; 
    // else (){};

    
   
});


server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on port 3000')
});

