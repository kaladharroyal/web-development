let n = prompt("enter the number")
let count = 0
while(n>0){
rem = n%10
n = Math.floor(n/10)
count++
}
console.log(count)
