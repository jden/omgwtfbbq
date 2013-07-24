var chai = require('chai')
chai.should()

describe('omgwtfbbq', function () {
  var omgwtfbbq = require('../')

  it('s alive!', function () {

    Object.keys(omgwtfbbq).should.deep.equal(['omg','wtf','bbq'])

  })
})