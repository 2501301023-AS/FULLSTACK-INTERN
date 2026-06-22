nc function login(){
     return Promise.resolve({
        name:"Ram"
    })}
    login().then(user=>{
    console.log(user);
    return "order data"
})
