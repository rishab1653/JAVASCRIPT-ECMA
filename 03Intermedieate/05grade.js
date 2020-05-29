let calculate =  function(marks , total)
{
    let score = (marks/total)*100;
    
    let myGrade =''
    if(score>=90)
    {
        myGrade ='A'
    }

    else if(score>=80)
    {
        myGrade='B'
    }

    else if(score>=60)
    {
        myGrade='C'
    }
    
    else
    {
        myGrade = 'F'
    }

    return `Your Grade is ${myGrade} and marks is ${score}`
}

let result = calculate(92 , 100);
console.log(result)


