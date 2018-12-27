const http = require('http');

http.createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'application/json' });

        let exit = {
            name: 'Maxi',
            age: 20,
            url: request.url
        }
        response.write(JSON.stringify(exit));
        //response.write('Hola Mundo');
        response.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');