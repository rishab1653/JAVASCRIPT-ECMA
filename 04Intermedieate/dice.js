let numOne = 22
let numTwo = 7

let result = numOne/numTwo;
// console.log(result) //3.142857142857143

//---------------We Want upto two decimal places

// console.log(result.toFixed(2)); //3.14
// let ans = result.toFixed(2)
// console.log(Math.floor(ans)) //3.14 ka hme 3 dega
// console.log(Math.ceil(ans)) // 3.14 ka hme 4 dega

//console.log(Math.random()) // given value between 0 and 1
// console.log(Math.random()*10) //between and 9

let upper=25
let lower = 20
let ran =Math.floor(Math.random() *( upper-lower+1) + lower) 
console.log(ran)
 