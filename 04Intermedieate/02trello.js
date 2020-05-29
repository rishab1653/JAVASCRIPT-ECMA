let myTodos =
{
    day : 'Monday',
    meetings : 0,
    meetDone :0
}

let addmeeting = function(todo , meet =0)
{
    todo.meetings = todo.meetings+meet
}

let meetDone = function(todo , meet =0)
{
    todo.meetDone = todo.meetDone - meet
}

let resetDay = function(todo)
{
    todo.meetings=0;
    todo.meetDone=0;
}

let summary = function(todo)
{
    let meetLeft = todo.meetings + todo.meetDone;
    return `You have ${meetLeft} meeting left today`
}

addmeeting(myTodos , 4)
addmeeting(myTodos , 3)
meetDone(myTodos , 3)
console.log(myTodos)
console.log(summary(myTodos))