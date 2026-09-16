let n = prompt("enter the number")
let ans = 0
while(n>0){
rem = n%10
ans = rem + ans*10 
n = Math.floor(n/10)
}
console.log(ans)
