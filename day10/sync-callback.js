// callback with named function
function greet(name, callback){
    console.log("Hi" +name);
    callback();
}

function sayBye(){
    console.log("Bye!");
}
greet("John", sayBye);

// callback with anonymous function
processuser("Alice", function(username){
    console.log("Welcome, " +username );
});

function processuser(name, callback){
    console.log("processing user: ", name);
    callback(name);
}
