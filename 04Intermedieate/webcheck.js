let userName ='rishab123'
let password = '123456789'

let emailchecker = function(user)
{
    if((userName.includes(123)) &&  (userName.length>8))
    {
        return true
    }

    return false;
}

let passwordCheck = function(pass)
{
    if((password.includes(123)) && (password.length>6))
    {
        return true
    }

    return false;
}

console.log(emailchecker())