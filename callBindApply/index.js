// Call:-

// let obj = {
//     id: 1,
//     firstName: "Ushant",
//     lastName: "Singh",
//     fullName: function (city) {
//         console.log(this.firstName+this.lastName+city);
//     }
// }

// let user = {
//     id: 2,
//     firstName: "Arya ",
//     lastName: "Singh",

// }
// obj.fullName.call(user, " Bhopal")



// // Apply:-
// let obj = {
//     id: 1,
//     firstName: "Ushant",
//     lastName: "Singh",
//     fullName: function (city) {
//         console.log(this.firstName+this.lastName+city);
//     }
// }

// let user = {
//     id: 2,
//     firstName: "Arya ",
//     lastName: "Singh",

// }
// obj.fullName.apply(user, [" Bhopal"])


// Shallow Copy:-
let obj = {
    id: 1,
    name : "Ushant",
}

// let user = obj
// user.name = "Arya"
// console.log(user.name);
// console.log(obj.name);


let user = {...obj}
user.name = "Arya"
console.log(user.name);
console.log(obj.name);

