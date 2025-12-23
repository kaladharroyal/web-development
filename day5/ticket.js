age = prompt("enter the age")
isStudent = prompt("enter you are a student(yes/no)")



if (age<=8){
    console.log("ticket price is 10$")
}
else if(age>8 && age<18){
        console.log("ticket price is 20$")
}

else if (isStudent === 'yes'&& age >= 18 && age <24)
{
    console.log("ticket price is 25$")
}
else if (isStudent === 'no'&& age >= 18 && age <24)
{
    console.log("ticket price is 30$")
}
else{
        console.log("ticket price is 50$")
}
