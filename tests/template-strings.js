var expect = require("chai").expect;

describe('test suite', function() {
  it('true should be true', function () {
    expect(true).to.be.true;
  });
  it('should be a string', function () {
    var string = `abc`;
    expect(string).to.be.a('string');
  });
  it('can evaluate variables', function () {
    var bar = 'baz';
    var string = `foo${bar}`;
    expect(string).to.equal('foobaz');
  });
  it('can evaluate expressions', function () {
    var string = `1+2=${1+2}`;
    expect(string).to.equal('1+2=3');
  });

describe('let declaration', function () {
  "use strict"

  it('can declare a variable like var', function () {

    let foo = 'bar';

    if(true) {
      var foo = 'baz';
      expect(foo).to.equal('baz');
    }

    expect(foo).to.equal('bar');

  });
});

});
