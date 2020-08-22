var request = require('request');
var fs = require('fs');

var r = request.post('http://localhost:8081/?filename=aaaaaaaaaa.jpg');

var upload = fs.createReadStream('a.jpg', { highWaterMark: 500 })

upload.pipe(r);

var upload_progress = 0;
upload.on('data', (chunk) => {
  upload_progress += chunk.length;
  console.log(new Date(), upload_progress)
})

upload.on('end', res => {
  console.log('finished')
})