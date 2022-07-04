// implement a function called sayHello that takes the name of the saluted and returns what would be said.
const sayHello = (toWhom) => {
  const output = `Hello, ${toWhom}!`;
  return output;
};

// make the functions exportable
module.exports = sayHello;