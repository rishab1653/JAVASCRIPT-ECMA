// let myTodo = ['Buy Bread' , 'Go to Gym' , 'Website Develop']

// console.log(myTodo)

// console.log(myTodo.indexOf('Buy bread')) //-1 because there elemnet exist in array because it is Bread not bread
// console.log(myTodo.indexOf('Buy Bread')) // 0 index

//  const myTodos = [{} , {} , {}];

const myTodos = [{
    title :'Buy Bread',
    isDone : false,
} , {

    title :'Go To Gym',
    isDone : false,

} , {
    title : 'Web Develop',
    isDone : true,
}];

//How It Works It itereates to every element of array it gets his own requirement


//////////-----------------Directly variable decaration method---------------////
// const res =  myTodos.findIndex(function(todo , index){
//     console.log(todo) //variable hich is used to iterate
//     return todo.title === 'Go To Gym'
// })

// console.log(res)



//-------------Method One -----------------------------------

// const res = function(temp , title)
// {
//     const small_res = myTodos.findIndex(function(todo , index){
//         return todo.title.toLowerCase() == title.toLowerCase()
//     })

//     return temp[small_res]
// }

// let printme = res(myTodos , 'Go to gym')
// console.log(printme)



//----------------Find FUnction----------------------

let my = function(mytodo , title)
{
    let res = myTodos.find(function(todo , index){
        return todo.title.toLowerCase() === title.toLowerCase()

    })

    return res

}

let print = my(myTodos , 'Go to gym')
console.log(print)









