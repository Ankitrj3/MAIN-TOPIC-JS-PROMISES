const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error = false;
        let error = true;
        if(!error){
            resolve({username: "ankitranjan",password: "1233453"})
        }else{
            reject('ERROR : Something went wrong')
        }
    },2000)
})

async function consumePromiseFive(){
    try{
        const reponse = await promise5
    console.log(reponse)
    }catch(error){
        console.log(error)
    }
}

consumePromiseFive()