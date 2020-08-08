var assert = require('assert')

var add = require('../src/add')

describe('add', function () {
  it ('should reutrn -1 when the value is note present', function () {
    assert.equal(add.add(3, 4), 7)
  })
});
