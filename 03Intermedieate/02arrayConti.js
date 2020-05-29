
const numbers = ['one','two','three','four'];
console.log(numbers)

numbers[1] = 'new'

console.log(numbers)

//start

console.log(numbers.shift());
console.log(numbers)

console.log(numbers.unshift('something'))
console.log(numbers)

// Ending

console.log(numbers.pop())
console.log(numbers)

console.log(numbers.push('four'))
console.log(numbers)


//Middle
const numbers1 = ['one','two','five','four'];
console.log(numbers1)

console.log(numbers.splice(2 , 1 , 'Three'))
console.log(numbers)