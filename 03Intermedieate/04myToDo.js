const todo =[];

todo.push('Buy Bread')
todo.push('COllege Assignment')
todo.push('Go to Gym')
todo.push('Take a Bath')

// for (let index = 0; index < todo.length; index++) {
//     const element = todo[index];
//     console.log(`My Task No ${index+1} is ${todo[index]}`)
    
// }

todo.forEach(function(todo1 , index)
{
    console.log(`My task No ${index+1}  is ${todo1}`)
})