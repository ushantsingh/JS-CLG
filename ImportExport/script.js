import {a,data, sum} from './new.js'
console.log(a);
console.log(data);
console.log(sum(5,6));

// // Pure Functions
// function double(num) {
//     return num *2
// }

// console.log(5);
// console.log(5);
// console.log(5);


// // Impure Functions:-
// let count = 0;
// function impure(num) {
//     count++
//     return count
// }

// console.log(impure());
// console.log(impure());
// console.log(impure());



// Functions Curring
function sum(b) {
    return function (a) {
        return function (c) {
            return a+b+c
        }
    }
}
console.log(sum(5)(6)(7))


function sum(a) {
    return function (b) {
        if (b) {
            return sum(a+b)
        }
        return a
    }
}
console.log(sum(6)(5)(8)(1)(4)(5)(3)(6)())


// SPREAD OPerator:-
let arr = [1,2,3,4]
let nums = [...arr, 7,8,9,0,23]
console.log(nums);


// Rest Operator:-
function sum(a, b, c, ...nums) {
    console.log(nums);
    
}
sum(3, 4, 5, 54, 4, 1, 5, 7, 76, 9)

// Destructuring 
let arr1 = [1,2,3,4,5,6,7,8]
let [a, b, c] = arr1
console.log(a);
console.log(b);
console.log(c);


let obj = {
    id: 1,
    name : "ushant"
}

let {id, name} = obj
console.log(id);
console.log(name);


// React se pahle JQuery hua krti thi jo ki DOM Manupulation ko aasan bna deti hai