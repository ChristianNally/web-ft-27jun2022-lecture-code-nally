
let x = 2;

// this function is now impure
const addTwo = (num) => {
  // PUSH DATA TO AN API

  return num + x;
};

console.log('addTwo(4)', addTwo(4));
x = 3;
console.log('addTwo(4)', addTwo(4));
