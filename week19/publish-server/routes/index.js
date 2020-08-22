
var express = require('express');
var router = express.Router();

const fs = require('fs');

// /* GET home page. */
// router.all('/', function(req, res, next) {
//   let path = '../server/public/' + req.query.filename;
//   fs.writeFileSync(path, req.body.content);

//   res.send();
//   res.end();
// });

router.post('/', (req, res, next) => {
  req.pipe(fs.createWriteStream('../server/public/' + req.query.filename));
  req.on('end', () => {
    res.end();
  });
})

module.exports = router;
