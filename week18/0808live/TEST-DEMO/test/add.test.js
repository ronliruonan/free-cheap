var assert = require('assert')

// var mod = require('../dist/add.js')
// var mod = require('../src/add.js')
var mod = require('../sbb/add.js')

describe('add', function () {
  it ('should reutrn -1 when the value is note present', function () {
    assert.equal(mod.add(3, 4), 7)
  })
});
