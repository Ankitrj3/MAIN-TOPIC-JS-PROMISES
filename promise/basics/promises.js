// promise object represents the eventual completion or failure

// 3 state of promises
// pending,fullfilled,rejected


// creation of promises
const promiseOne = new Promise(function(resolve,reject){
    // DO an async task 
    // DO calls, cryptography,network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("aysn task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("asyn 2 resolved");
})

