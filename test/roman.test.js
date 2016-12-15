let assert = require('assert')
let romanify = require('../js/roman')
// make a converter to turn numbers into Roman numerals.
// write tests for middle ground codes, not too hard or too easy to test.
// test will be more clever than the actual codes.
// start with plain english description
//like 1 => "I"
// 2 => "II"
// 3 => "III"
// 4 => "IV"
// 5 => "V"
// 6 => "VI"
// 7 => "VII"
// looks like my inputs are always one number at a time
// and the output is a string
//write a test to make it fail then write code to make it pass

// step 1 write a test and see it fail
// step 2 write just enough code to make it pass
// step 3 refactor and make the code looks more concise and easy to read.

describe('Roman numberal converter', function (){
  it('converts 1 to I', function(){
    let result = romanify(1)
    assert.equal(result, "I")
  })
  it('converts 2 to II', function(){
    let result = romanify(2)
    assert.equal(result, "II")
  })
  it('converts 3 to III', function(){
    let result = romanify(3)
    assert.equal(result, "III")
  })
  it('converts 4 to IV', function(){
    let result = romanify(4)
    assert.equal(result, "IV")
  })
  it('converts 5 to V', function(){
    let result = romanify(5)
    assert.equal(result, "V")
  })
  it('converts 6 to VI', function(){
    let result = romanify(6)
    assert.equal(result, "VI")
  })
  it('converts 9 to IX', function(){
    let result = romanify(9)
    assert.equal(result, "IX")
  })
  it('converts 13 to XIII', function(){
    let result = romanify(13)
    assert.equal(result, "XIII")
  })
  it('converts 14 to XIV', function(){
    let result = romanify(14)
    assert.equal(result, "XIV")
  })
  it('converts 18 to XVIII', function(){
    let result = romanify(18)
    assert.equal(result, "XVIII")
  })
  it('converts 29 to XXIX', function(){
    let result = romanify(29)
    assert.equal(result, "XXIX")
  })
  it('converts 39 to XXXIX', function(){
    let result = romanify(39)
    assert.equal(result, "XXXIX")
  })
  it('converts 96 to XCVI', function(){
    let result = romanify(96)
    assert.equal(result, "XCVI")
  })
  it('converts 2017 to MMXVII', function () {
    let result = romanify(2017)
    assert.equal(result, "MMXVII")
  })
  describe('when input is a string', function(){
    it('converts "1" to "I"', function(){
      let result = romanify("1")
      assert.equal(result, "I")
    })
  })
})
