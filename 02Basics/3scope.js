

let global = 'i am global'

if(true)
{
    let local = 'i am local'
    var local1 = 'i am variable local '
    console.log(global)
    console.log(local)

    global = 'i am new global'
}

// console.log(local)    gives error because the variable is local
console.log(global)

//*******************Important**************************** */

console.log(local1);


//***************remember************** */
    // if we use var in a block then it will be accesible globally thats why we use let instead of var