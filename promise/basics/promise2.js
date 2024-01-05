const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "ankit",email: "ankit2321@gmail.com"})
    },2000)
})
promise3.then(function(user){
     console.log(user);
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "ankit",password: "123"})
        }else{
            reject('ERROR : Something went wrong')
        }
    },2000)
})
promise4.then((user)=>{
     console.log(user);
     return user.username;
}).then((username)=>{
      console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("the promise is either resolve or rejected");
})

