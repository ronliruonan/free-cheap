var parser = require('./parser');

module.exports = function ( source, map) {
  console.log(source);
  console.log(parser.parseHTML(source))

  return "";
}