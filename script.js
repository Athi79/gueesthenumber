var inputBox=document.getElementById("inputBox")
var result =document.getElementById("result")
var guesscount=document.getElementById("guesscount")
var noofguess=3

//generate random number from 1 to 5
var randomnumber=Math.floor(Math.random()*10)+1
if(randomnumber>5)
{
    randomnumber=randomnumber-5
}
 
//event headler function
function  checkthenumber()
{
    if(inputBox.value == randomnumber)
    {
        alert("you are right")
        result.textContent="you are right"
    }else
    {
        noofguess= noofguess-1
        if(noofguess==0)
        {
            alert("you lost,generated random number is:"+randomnumber)
        }
        guesscount.textContent="available guesses:"+noofguess
        result.textContent="you are wrong!"

    }


}