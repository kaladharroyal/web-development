// // // setTimeout-asyncronous
// console.log("start");
// setTimeout(()=>{
//     console.log("callback after the 2 seconds");
// }, 2000)
// console.log("end");

// setTimeout(()=>{
//     console.log("callback after the  seconds");
// }, 0)
// setTimeout(()=>{
//     console.log("callback after the 1 seconds");
// }, 1000)


// // callback hell

// console.log("start");
// setTimeout(()=>{
//     console.log("step 1 done");
//     setTimeout(()=>{
//     console.log("step 2 done");
//     setTimeout(()=>{
//     console.log("step 3 done");
//     setTimeout(()=>{
//     console.log("step 4 done");
// }, 1000)
// }, 0)
// }, 1000)
// }, 1000)


// // rewrite with named functions
// function step1(){
//     console.log("step 1 done");
//     setTimeout(step2, 1000);
// }
// function step2(){
//     console.log("step 2 done");
//     setTimeout(step3, 1000);
// }
// function step3(){
//     console.log("step 3 done");
//     setTimeout(step4, 1000);
// }
// function step4(){
//     console.log("step 4 done");

// }
// console.log("start");
// setTimeout(step1, 1000)

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function(num) {
  return num * 2;
});
