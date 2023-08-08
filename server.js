// Nodemon 是一個在 Node.js 開發中非常常用的套件，可以在應用程式啟動後自動監聽並重新啟動程式，這樣可以減少開發者在修改程式碼後需要手動重啟應用程式的時間，提高開發效率。​​​​​​​

const http = require('http');

const hostname = '127.0.0.1';
const port = 3002;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});