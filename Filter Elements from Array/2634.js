/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
   const newArr =  arr.filter((a,i)=>fn(a,i));
   return newArr;
};

arr=[0,10,20,30];

function greaterthan10(n){
    return n>10;
}

function firstIndex(n,i){
    return i===0;
}

function plusOne(n){
    return n+1;
}

arr2 = [1,2,3];
arr3 = [-2,-1,0,1,2];




const newArray = filter(arr,greaterthan10);
const newArray2 = filter(arr2,firstIndex);
const newArray3 = filter(arr3,plusOne);


console.log(newArray);
console.log(newArray2);
console.log(newArray3)