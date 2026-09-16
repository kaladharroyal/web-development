let Number = prompt("enter the number")

if(number = 0){
    console.log("Zero")
}
else if (number%2==0 && Number<0){
    console.log("even negative")
} 
else if (number%2==0 && Number>0){
    console.log("even positive")
} 
else if (number%2!=0 && Number<0){
    console.log("odd negative")
} 
else if (number%2!=0 && Number>0){
    console.log("odd positive")
} 