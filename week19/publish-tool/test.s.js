const http = require('http')
var fs = require('fs');

let filename = 'ppp.png';
const options = {
  hostname: '192.168.0.106',
  port: 8081,
  path: '/?filename=' + filename,
  method: 'POST',
};

var r = http.request(options);
var upload = fs.createReadStream(filename, { highWaterMark: 400 })

upload.pipe(r);

var upload_progress = 0;
upload.on('data', (chunk) => {
  upload_progress += chunk.length;
  console.log(new Date(), upload_progress)
})

upload.on('end', res => {
  console.log('finished')
})

