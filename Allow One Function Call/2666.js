/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let run = true;
  return function (...args) {
    if (run) {
      run = false;
      return fn(...args);
    } else {
      return undefined;
    }
  };
};


function fn(a, b, c) {
  return a+b+c;
}
const Oncefn = once(fn);

console.log(Oncefn(1,2,3));
console.log(Oncefn(2,3,6));

function fn2(a,b,c){
    return a*b*c;
}

const oncefunc = once(fn2);



console.log(oncefunc(5,7,6));
console.log(oncefunc(2,3,6));
