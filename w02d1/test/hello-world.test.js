// pull in whichever assert library you'd like to use
const assert = require('assert');

// pull in the main functions that will be tested
const sayHello = require('../hello-world');

// write the mocha describe() and it() function calls that will implement the test(s)

describe('the appropriate group', () => {
  it('salutes bob appropriately', () => {
    const returnValue = sayHello('Bob');
    assert.equal('Hello, Bob!', returnValue);
  });
  
  it('salutes darian appropriately', () => {
    const returnValue = sayHello('Darian');
    assert.equal('Hello, Darian!', returnValue);
  });  
});
