// promises

/*states of promises:
pending: initial state neither fullfilled nor rejected.
fulfilled:operation completed successfully.
rejected: operation failed.
*/

// promise returns output as an object.

/*syntax 
const promise = new Promise((resolve, reject)=>{
    // async task
    if(true){
        resolve("Success Message");
    }else{
        reject("Error Message")
    }
});*/
// promise calling
/*.then :- gets the true value
.catch:- gets the false values*/


console.log("Promise examples:");

const CheckAge = new Promise((resolve, reject)=>{
    const age = 15;
    if (age>=18){
        resolve("Access granted");
    }
    else{
        reject("Access denied")
    }
});

CheckAge
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.error(error);
    });

    
const MyPromise = new Promise((resolve, reject)=>{
    let value = 15;
    if (value>3){
        resolve("Value is greater than 3");
    }
    else{
        reject("Value is less than 3")
    }
});

MyPromise
    .then((message)=>{
        console.log(message);
    })
    .catch((error)=>{
        console.error(error);
    });


console.log("Async operations handling in promises");

function FetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const s = true;
            if(s){
                resolve("Data fetched succesfully");
            }else{
                reject("Failed data fetching");
            }
        }, 1000)
        
    })
}

FetchData()
.then((data) => console.log(data))
.catch((err) => console.error(err));

console.log("promises chaining");

function step1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("step 1 done");
            resolve();
        }, 1000);
    });
}

function step2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("step 2 done");
            resolve();
        }, 1000);
    });
}

step1()
    .then(() => step2())
    .then(() => console.log("All steps completed"));


console.log("callback hell example recreation using Promises"); 

function WaitAndAlong(message, delay){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log(message);
            resolve();
        }, delay);
    });
}

//executing is based on the fuunction calling and it doen't depend on the delay    

console.log("Start");
WaitAndAlong("step 1 done", 1000)
    .then(()=>WaitAndAlong("Step 2 done", 2000))
    .then(()=>WaitAndAlong("Step 3 done", 1000))
    .then(()=>WaitAndAlong("Step 4 done", 0))



// output
/*Start
step 1 done
Step 2 done
Step 3 done
Step 4 done*/




