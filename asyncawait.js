// getuser()
// .then((user)=>{
//     return getorder(user.id);
// })
// .then((orders)=>{
//     return getpayment(orders.id)
// })
// .then((payment)=>{
//     console.log(payment);
// })
// .catch(console.log);

// async function greet(){
//     return "Hello";
// }
// console.log(greet());


// async function getNumber(){
//     return 100;
// }

// // return Promise.resolve(100);

// console.log(getNumber());


// const promise=Promise.resolve("Ram");
// async function getData(){
//     const result=await promise;
//     console.log(result);
// }
// console.log(getData());


// function getuser(){
//     return Promise.resolve({
//         name:"Ram"
//     })
// }
// getuser()
// .then(user=>{
//     console.log(user);
// })
// convert to async

// async function getuser(){
//     return Promise.resolve({
//         name:"Ram"
//     })
// }
// getuser()
// .then(user=>{
//     console.log(user);
// })
// console.log(getuser());

// ex:-
// async function login(){
//      return Promise.resolve({
//         name:"Ram"
//     })}
//     login().then(user=>{
//     console.log(user);
//     return "order data"
// })
// .then(getorders=>{
//     console.log(getorders);
//     return "payment data"
// })
// .then(getPayment=>{
//     console.log(getPayment);
//     return "order status"
// })
// .then(orderdone=>{
//     console.log(orderdone);
// })
//  .catch(error => {
//     console.error(error);
//   });

// ex:-
// async function login(){
//      return Promise.resolve({
//         name:"Ram"
//     })}
//     login().then(user=>{
//     console.log(user);
//     return "order data"
// })

// // sequential execution:-
// const user=await getuser();
// const orders=await getOrders();
// const payment=await getPayment();
// // user->orders->Payment->time taken willbe 9sec

// //parallel execution
// const [users,orders,payment]=await Promise.all([
//     getuser(),
//     getOrders(),
//     getpayment(),

// ])
// //total time taken will be 3sec

// Top Level await:-Before
// async function main(){
//     const data fetchData();
// }
// main();

// In moderenJs
// const data=await fetchData();

// Async iteration
// normal iteration
// const arr=[10,20,30,40,50]
// for(const value of arr){
//     console.log(value);
// }
//use ->array,string,map,set
//Problem->Man liya hmari value turant nahi aa rahi ek ek krke future me aayengi

// server Date->user1(wait)->user2(wait)->user3
//in this case for of will not work
//for this problem we will use async iteration
//first to create async data sources

// async function* getusers(){
//     yield"ram";
//     yield"shyam";
//     yield"shivam";
// }
// async function main(){
//     for await(const user of getusers()){
//         console.log(users);
//     }
// }

