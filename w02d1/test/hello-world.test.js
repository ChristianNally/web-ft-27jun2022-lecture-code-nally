// pull in whichever assert library you'd like to use
const chai = require('chai');  
const assert = chai.assert;    // Using Assert style

// pull in the main functions that will be tested
const funks = require('../hello-world');

// write the mocha describe() and it() function calls that will implement the test(s)

describe('the appropriate group', () => {
  it('salutes bob appropriately', () => {
    const returnValue = funks.sayHello('Bob');
    assert.equal('Hello, Bob!', returnValue);
  });
  
  it('salutes darian appropriately', () => {
    const returnValue = funks.sayHello('Darian');
    assert.equal('Hello, Darian!', returnValue);
  });  
});


describe('the appropriate goodbyes group', () => {
  it('dismisses bob appropriately', () => {
    const returnValue = funks.sayGoodbye('Bob');
    assert.equal('Goodbye, Bob!', returnValue);
  });
  
  it('dismisses darian appropriately', () => {
    const returnValue = funks.sayGoodbye('Darian');
    assert.equal('Goodbye, Darian!', returnValue);
  });  
});