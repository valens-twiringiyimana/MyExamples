console('This is my server.');
console.log('This is my server.');
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};      
https.createServer(options, (req, res) => {   
  res.writeHead(200);
  res.end('Hello Secure World\n');
}).listen(443);
console.log('Server running at https://localhost:443/');
console.log('Server welcome to my website please. Run the server my dear friend running at https://localhost:443/');
jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj



