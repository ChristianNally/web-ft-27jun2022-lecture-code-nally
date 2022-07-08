const promiseGenerator = require('./promise-generator');
const returnPromise = promiseGenerator.returnPromise;

const promise = returnPromise('first promise', 4444);
console.log('promise:',promise);

console.log('first');

// Not the best way to do this
// setTimeout(()=>{
//   console.log('promise 6 seconds later:',promise);
// },6000);

//
// The RIGHT way to do this
//
let x = 0;

const cb = (resolvedPromiseOutput) => {
  console.log('third');
  // const newData = 'another thing';
  // console.log("newData:",newData);
  console.log('data:', resolvedPromiseOutput);
};

promise
  .then(cb) // <--- that is just a function call. no magic there!
  .then((data2) => {
    console.log('it is alive!');
    console.log('data2',data2);
  });

console.log('x',x);
