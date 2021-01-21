const http = require('http');

const port = process.env.PORT || 5000

http
  .createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    response.end('This is the app: customer-app-56862\n');
  })
  .listen(port);

console.log(`Server running at port ${port}`);
