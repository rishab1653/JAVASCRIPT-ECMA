let sayHello = function(name) 
{
        console.log('I am Function one ');
        console.log(`Hey ${name}`)
}

sayHello('Rishab');

let fullname = function(fName , lName)
{
    console.log('I am Second FUnction')
    console.log(`Thanks For Coming ${fName} ${lName}`)
}

fullname('Rishab' , 'Goyal')

let myAdd = function(num1 , num2)
{
    let added = num1+num2
    return added;

}

console.log(myAdd(2,3));

let myFunction = function(name = 'null' , id = 0)  
// default value
{
    console.log(`Name is ${name} and id is ${id}`);
}


myFunction();
