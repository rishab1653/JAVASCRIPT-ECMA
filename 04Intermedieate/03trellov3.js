let myToDos = 
{
    day : 'Monday',
    meetings : 0,
    meetDone : 0,

    addmeeting : function(num)
    {
       this.meetings=this.meetings+ num;
    } ,

    summary : function()
    {
        return `You have ${this.meetings} today `
    },

    reserday: function()
    
    {
        this.meetings=0
        this.meetDone=0
    }
}

// let myToDos2 = 
// {
//     day : 'Tuesday',
//     meetings : 10,
//     meetDone : 4,

//     addmeeting : function(num)
//     {
//        console.log(this);
//     } ,
// }

myToDos.addmeeting(4);
console.log(myToDos.summary());
myToDos.reserday();
console.log(myToDos);

//myToDos2.addmeeting();
