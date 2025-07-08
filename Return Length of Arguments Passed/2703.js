/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let result = 0
    args.forEach((arg)=> result++);
    return result;
};


console.log(argumentsLength(5,{}));
console.log(argumentsLength({},null,"3"));

