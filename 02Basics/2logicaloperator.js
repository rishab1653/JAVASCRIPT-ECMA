// && AND ooerator
// || OR 

var isUser = true
var isLogIn = true
var paymentDone = true
var isGuest = true

if(isUser && isLogIn && paymentDone)
{
    console.log("Successfully Registered with our paid  courses")
}

else if(isUser && isGuest )
{
    console.log("SuccessFully Registered for Free Courses")
}

else
{
    console.log("Please Create A Account")
}

