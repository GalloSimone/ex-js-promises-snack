const utenti =require("./db.js");
const getUserData=id=>{
    const promessa =new Promise((resolve,reject)=>{
        
        const user =utenti.find(user=>user.id===id);
        if(user){
            resolve(user)
        }
        else{
            reject("user non trovato")
        }

    })
    return promessa
}
getUserData(5)
.then(response=>console.log(response))
.catch(error=>console.error(error));