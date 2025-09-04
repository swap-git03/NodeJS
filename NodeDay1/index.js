const http = require('http');
const settings = require('./config/setting')
const os = require('os')


const PORT = settings.port || 10222

const index = http.createServer((req, res) => {
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!\n');
});

console.log(os.platform())
console.log(os.homedir())



index.listen(PORT, () => {
  console.log('Server started');
    console.log('http://localhost:3000');

});