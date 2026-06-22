// // sync code:-
// // console.log("1");
// // for (let i=0;i<100000000000000;i++){}
// // console.log("2");

// // async code:-
// console.log("start");
// setTimeout(() => {
//     console.log("Hello")
// }, 6000)
// console.log("ENd");

// fetch("https://dummyjson.com/carts")
// .then((data)=>{
//     return data.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// const result=fetch("https://dummyjson.com/carts")
// console.log(result.data);

// Promise.resolve()
// .then(()=>{
//     console.log("step 1")
// }).then(()=>{
//     console.log("step2")
//     throw new error("booommm")
// })
// .then(()=>{
//     console.log("step 3")
// })
// .catch((err)=>{
//     console.log(err.message);
// })
// .then(()=>{
//     console.log("step 4");
// }).finally(()=>{
//     console.log("thank");
// })


// Promise.all([
//     Promise.resolve("Milk"),
//     Promise.reject("error"),
//     Promise.resolve("Tea"),
// Promise.reject("Day")
// ])
// .catch(console.log)

// Promise.allSettled([
//     Promise.resolve("Milk"),
//     Promise.reject("error"),
//     Promise.resolve("Tea"),
// Promise.reject("Day")
// ])
// .then(console.log)


// const p1=new Promise (resolve=>{
//     setTimeout(()=>{
//         resolve("A");
//     },3000)
// })
// const p2=new Promise (resolve=>{
//     setTimeout(()=>{
//         resolve("B");
//     },1000)
// })
// Promise.race([p1,p2])
// .then(console.log);

// Promise.any([
//     Promise.reject("A"),
//     Promise.reject("B"),
//     Promise.resolve("C"),
// ]).then(console.log)

// cb:->
// function getusers(callback){
//     setTimeout(() => {
//        callback({
//         id:1,
//         name:"Ram"
//        }) 
//     }, 2000);
// }
// getusers((user)=>{
//     console.log(user);
// })

// function getusers(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve({
//                 id:1,
//                 name:"Ram"
//             })
//         },2000)
//     })}
//     getusers().then((user)=>{
//         console.log(user);
//     })

// function fetchUser(cb){
//     setTimeout(() => {
//         cb("Ram")
//     }, 1000);
// }

function getuser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                name:"Ram"
            })
        },1000)
    })
}
getuser().then((user)=>{
    console.log(user);
})