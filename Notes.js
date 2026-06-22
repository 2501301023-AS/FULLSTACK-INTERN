// var and its types and difference
// before es6-only one variable-var
// after es6-three types of variable let,var and const
// problems with var-
// ->Redeclartion allowed
// var a=6
// var a=30
// console.log(a)
// ->Functional Scope 
// function result(){
// var x=5;}
// console.log(x);(referenceerror:x is not defined)
// ->Loop Related Problem
// For(var i=1;i<=3;i++){
// setTimeout(()=>{
// console.log(i);},1000;} output:- 4 4 4

import { Component } from "react"


// Let->Introduction In Es6
// ->Redeclartion is not allowed
// ex:-
// Let a=5;
// let a=7;
// console.log(a); output:-5
// ->functional 
// block scope  {}->you can only access these variables defined inside curly braces within 
// For(let i=1;i<=3;i++){
// setTimeout(()=>{
// console.log(i);},1000;} output:-1 2 3
// Loop Problem solved


// const
// Reassigement is not allowed
// -in case of object with const it is allowed
// const value=3.14
// value=4.5

// const user={
// name:"Sachin",
// age:30,
// city:"Panipat"}
// user.name="priyansh"
// console.log(user.name);
// ouput:-Priyansh

// Hosting:-To load variable to memory and assign the value undefined and all type of three hosted

// Ex:-
// console.log(a)
// var a=7;
// let b=8;
// var result=31
// const value=89
// let m=7;

// Memory            code

// a  =uf               
// b =uf
// result=uf
// value=uf
// m=uf

// when we write console.log(b) in this case error come in the place of undefined
// -We cannot access variable of data type 
// Let and const they are in temporal dead zone.
// Temporal Dead zone:- the period between entering a scope and the point where a let or const variable is declared.

// Function:-Work same hai but variable ala ala ho sakta hai.
// Ex:-
// function add(let a,let b){
// let result=a+b;
// return result;}
// let data=add(5,6);
// console.log(data);


// Arrow Function in javascript:-shortest the syntax
// ex:-single parameter
// const square=num=>{
// return num*num;
// console.log(num(8));

// multiple parameter
// Implicit return
// const multiply=(num1,num2=>num1*num2;//we can pass more parameter 
// console.log(multiply(8,7)); output:-56

// No parameter:-
// const multiply=()=>"Helloooooo"
// console.lo(multiply());

// return object:-
// const multiply=()=>({
// name:"Sachin})
// console.log(multiply());
// output:-{ name : 'Sachin'}


// // Write an arrow function findout products whose price is greater than 10000.
// const products=[
//     {
//         id:1,name:"Mobile",price:15000},
//         {id:2,name:"Pen",price:150},
//        { id:3,name:"Laptop",price:75000},
//         {id:4,name:"Bottle",price:150},
//         {id:5,name:"Tv",price:25000},
//         {id:6,name:"Tablet",price:125000},
//         {id:7,name:"Book",price:600},
//         ]
       
//          console.log(products.filter(a=>a.price>10000));
//          //a ki jaga ham kuch bhi like sakta hai it point out
//         //  the objects of an array


// // Write an arrow function findout products sum
// const products=[
//     {
//         id:1,name:"Mobile",price:15000},
//         {id:2,name:"Pen",price:150},
//        { id:3,name:"Laptop",price:75000},
//         {id:4,name:"Bottle",price:150},
//         {id:5,name:"Tv",price:25000},
//         {id:6,name:"Tablet",price:125000},
//         {id:7,name:"Book",price:600},
//         ]
       
 
//   const sum=products.reduce((sum,item)=>sum+item.price,0);
//   console.log(sum);

// Template Literal In JavaScript:-without concatenation of string you can use its 
// const name="Sachin"
// Console.log("Hello"+name);//use when concatenation

// ex:-const name="Geeta";
// console.log(`My School name is ${name}`);
// -> it is introduced in ES6
// ->Uses for multi line string
// For multiple lines we can write the text:-
// Ex:-
// const line=`
// My Name
// is 
// Surya Dada.`
// console.log(line);

// // addition of these value is 13
// a=5
// b=8
// console.log(`
// addition of a+b= ${a+b}`)



// Array Destructuring:-

// // const arr=[10,20,30,40];
// // const [a,,c,d]=arr;
// // console.log(d)
// const user={    
//     name:"Ram",
//     age:25
// }
// const {name,age}=user;
// // console.log(name);
// // task->name->username
// const{
//     name:username
// }=user;
// console.log(username);


// Default Parameter and rest/spread operator:-

// function greet(name){
// console.log(name);
// }
// greet();



// // function createUser(role="student"){
    
    
// // }
// function fetchData(page=1){
    
// }
// fetchData(4);



// spread and rest operator:-

// Rest operator:- all value put in single arr
// ex:-
// function addvalue(...nums){
//     console.log(nums);
//     return 89;
// }
// console.log(addvalue(1,2,3,4,5,6,7,8,9));

// Rest operator usecase in project:-
// function total(...prices){}
// function mergeUsers(...users){
// }

// spread operator:-
// const arr=[1,2,3,4]
// const arr2=[...arr];
// console.log



// Day 2:-
// Lexical scope
// closure
// iife
// hof
// map()
// filter()
// reduce()
// function compostion
// currying
// Memoization

// ->Lexical scope:- ka matlab itna h ki child function apne parent variables ke sare
// variables ko access kr sakta ha.
// ex:-
// function outer(){
// //     let username="Parveen";
// //     function inner(){
// //         console.log(username);
// //     }
// //     inner();
// // }
// // outer();
// ex:-
// function a(){
//     let x=10;
//     function b(){
//         let y=20;
//         function c(){
//             console.log(x);
//             console.log(y);
//         }
//         c();
//     }
//     b();
// }
// a();
// console.log(x);

// global scope:-scope matlab kisi variable ko kha se access kr sakta hai
// Ex:- //Global Scope
//  let name="Sachin"
// function show(){
//     console.log(name);
// }
// show();

// 2.functional scope:-jab koi variable kisi function ke andar define hoga to usko outside the function access nahi kar satka
// Ex:-
// //functional scope:-
// // function show(){
// //  let name="Sachin" 
// // }
// //   console.log(name);
// // show();


// 3. block scope:-
// Ex:-
// {
//     let city="Delhi"
  
// }
//   console.log(city);

// Mix scope ka ex:-
// let a=10;
// function outer(){
//     let b=20;
//     console.log(a);
//     console.log(b);
// }
// outer();


// ->Closure:-is a comibination of function and its lexical environment.
// it store the prevois value of the parent function.
// Jab koi child function apna parent function ke fully execute ho jana ke bad bhi usse mili alue kko hold karke rkhta hai then that will be known as closure.
// Ex:- function outer(){
//       let count =0;
//       function inner(){
//           count++;
//           console.log(count);
//       }
//      return inner;
//   }
//   const result=outer();
//   result();
//   result();
//   result();


// ex :-
//  let company="Google";
//   function department(){
//       let dep="Engineering";
//       function team(){
//           let teamName="Frontend"
//           function employee(){
//               let emp="Ram";
//               console.log(company);
//               console.log(dep);
//               console.log(teamName);
//               console.log(emp);
//           }
//           employee();
//       }
//       team();
//   }
//   department();


// ex:-
//   let name="Global"
//   function outer(){
//       let name="Outer";
//       function inner(){
//           let name="inner"
//           console.log(name);
//       }
//       inner();
//   }
//   outer();

// ex:-let a=10;
// function outer(){
//     let b=20;
//     return function middle(){
//         let c=30;
//         return function inner(){
//             console.log(a);
//             console.log(b);
//             console.log(c);
//         }
//     }
// }
// const x=outer();
// const y=x();
// y();

// Ex:-
// let x=1;
// function A(){
//     let x=2;
//     function B(){
//     let x=3;
//     function C(){
//         let x=4;
//         function D(){
//             console.log(x);
//         }
//         D();
//     }
//     C();
// }
// B();}
//  A(); 


// ->iife->immediately invoed function expression(function bnta bhi h execute bhi ho jata h)

// syntax-(function(){console.log("Hello")}();

// ex:-(function(name){
//     console.log(name);
// })("Ram");

// ex:-const result=(function(a,b){
//     return a+b;
// })(10,20)
// console.log(result);

// Higher Order Function->
// when a function use a function as a parameter or a function returning a function as result
// that will be known as hof.
// Ex:-
// Function Hello(){
// cosole.log("Hello");}
// function execute(fn){
// fn();}
// execute(Hello);


// ex:-function calculate(a,b,operation){
// //       return operation(a,b);
// //   }
// //   function add(x,y){
// //       return x+y;}
// //       console.log(calculate(70,90,add));
  

// map() function->map hr element pr operation karta hai and new array return
// const nums=[1,2,3,4]
// const result=nums.map(num=>num*2)
// console.log(result);


// ex:-const products=[
//     {
//         id:1,name:"Mobile",price:15000},
//         {id:2,name:"Pen",price:150},
//        { id:3,name:"Laptop",price:75000},
//         {id:4,name:"Bottle",price:150},
//         {id:5,name:"Tv",price:25000},
//         {id:6,name:"Tablet",price:125000},
//         {id:7,name:"Book",price:600},
//         ]
       
 
//   console.log(products.map(a=>a.name +a.price));


// filter():-  when we want to implement some condtion over an array at that time we have to implement the concept of filter
// Note:-It does not effect your original array.
// ex:-
// const a=[10,20,30,40,50]
// const result=a.filter(geeta=>geeta<=30);
// console.log(result);

// ex:-const products=[
//     {price:10000},
//     {price:700},
//     {price:300},
//     {price:200}
//     ]
//    let b=products.filter(product=>product.price<500);
//     console.log(b);

// ex:-const names=["Ram","Amit","Sachin","Priyanshu","Ankush","Sahil","Sahil","Gyan","Shiv"]
//   const b=names.filter(name=>name.startsWith("S"));
//   console.log(b);

// Reduce()->
// When we have to convert an array into a single value.
// Ex:-// const nums=[1,2,3,4]
// // const sum=nums.reduce((acc,curr)=>acc+curr,10);
// // console.log(sum);
// Ex:-
// // const prices=[100,200,300,400,500]
// // const multi=prices.reduce((acc,curr)=>acc*curr,1);
// // console.log(multi);


// ex:-const word=["Hello","How","are","You"]
// // const b=word.reduce((acc,curr)=>acc+" "+curr);
// // console.log(b);



// Day-3->

// Curry function in js
// function add(let a,let b,let c){
// return a+b+c;}
// c.1(add(2,3,5))


// ex:-
// // Curry function in js
// // function add(a,b,c){
// //     return a+b+c;
// // }
// // console.log(add(2,3,5))

// // function add(a){
// //     return function(b){
// //         return function(c){
// //             return a+b+c;
// //         }
// //     }
// // }
// // console.log(add(2)(3)(3));


// ex:-function sendAutoEmail(to){
//     return function(subject){
//         return function(body){
//             console.log(`sending Email to ${to} with subject ${subject} and ${body}`)
//         }
//     }
// }
// let step1=sendAutoEmail("Ramlal34@gmail.com");
// let step2=step1("Regarding confirmation Mail Of Signup");
// step2('This is a proctores mail sent for only informational purpose');

// Object->
// ->data
// ->FUnction
// Ex of object:-
// const student={
// name:"Sachin",
// age:25,
// city:"Kanpur"}

// Key->name,age,city(properties):-
// ->To access value of key in objects we have to  use dot notation
// ->when we are using a function in an object at that time that will be know as method.

// ex:-
// // To store data of 100 students

// // let student1Name="Sachin",
// // let student1age=12,
// // let student1city="panipat"
// // let student2Name="Sachin",
// // let student2age=12,
// // let student2city="panipat"
// // const allStudentsData=[{
// //     name:"sachin",
// //     age:12,
// //     city:"panipat"

// // }]


// // const student={
// //     name:"Ram",
// //     age:23,
// //     city:"panipat"
// sayYourSkills:function(){
//     console.log("Hello my skills are mern stack");
// }
// // }

// student.sayYourSkills();
// // console.log(student.age+student["name"])
// // let key="name"
// // console.log(student[key])

// ex:-const student={
// //     name:"Ram",
// //     age:23,
// //     city:"panipat",
// // skills:"Mern Stack",
// // sayYourSkills(){
// //     console.log("Hello my skills are mern stack");
// // console.log(this.skills);
// // }

// // }
// // student.sayYourSkills();
// // console.log(student.age+student["name"])
// // let key="name"

// basically if any particular object is using any value of key in a method so at that time to access that we have to use this keyword.
// this->student 

// ex:-const obj1={
// //     name:"Ram"
// // }
// // const obj2=obj1
// // obj2.name="Shyam"
// // console.log(obj1.name) output:-shyam
// Prototype:-

// // const obj1={
// //     name:"Ram"
// // }
// // const obj2=obj1
// // obj2.name="Shyam"
// // console.log(obj1.name)

// // const dog1={
// //     name:"pilla",
// //     bark(){
// //         console.log("Helloo,i am barking");
// // const dog2={
// //     name:"Jack",
// //     bark(){
// //         console.log("Helloo,i am barking");
// // const dog3={
// //     name:"Oggy",
// //     bark(){
// //         console.log("Helloo,i am barking");
// //     }
// // }
// //Memory wasting
// // Method ko ek jagah rakhna hai
// const animal={
//      bark(){
//         console.log("Helloo,i am barking");
//     }
// }

// const dog=Object.create(animal)
// dog.name="Meta"
// dog.bark();

// Constructor Function->it is just like a machine
// constructor 
// |
// obj
// |
// obj

// previous

// ex:-// const student1={
// //     name:"Ram"
// //     age:25
// // }
// // const student2={
// //     name:"Parveen"
// //     age:25
// // }
// // const student3={
// //     name:"Sachin"
// //     age:25
// // }
// // const student4={
// //     name:"Gyanni"
// //     age:24
// // }
// new:-
// ex:-// constructor function
// function Student(name,age){
//     this.name=name;
//     this.age=age;
// }
// const s1=new Student("Ram",25);
// const s2=new Student("Ramu",25);
// const s3=new Student("Shyam",25);
// console.log(s1);

// step1->create a blank object
// const obj={};
// step2->to add obj from constructor
// this =obj
// step3->code execution
// this.name="Ram"

// this.age=25
// step4=Return object


// ex:-// Student.prototype.greet=function(){
// //         console.log("Hello");
// //     }
// // const s1=new Student("Ram",25);
// // const s2=new Student("Jatin",25);
// // const s3=new Student("Parveen",25);
// // s1.greet();
// // s2.greet();


// har ek function ka pass prototype property hoti hai
// Proof:-
// // function student(){
    
// // }
// // console.log(student.prototype)

// Proto:-
// const s1=new student();
// s1
// |
// __Prot__
// |
// student.prototype

// ex:-function student(){
    
// }
// const s1=new student();
// console.log(s1.__proto__===student.prototpe)

// ES6 class in JAVAscript
// |
// it is prototype based language

// ex:-// function Student(name,age){
// //     this.name=name;
// //     this.age=age
// // }
// // Student.prototype.greet= function(){
// //     console.log("hello");
    
 
// class Student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greet(){
//         console.log("hello")
//     }

// Inheritance:-Dog take properties of animal
// EX:-class Animal{
//     eat(){
//         console.log("eating")
//     }
// }
// class Dog extends Animal{
    
// }
// const d=new Dog();
// d.eat();


// Super() in js:-
// ex:-class Animal{
//     constructor(name){
//         this.name=name
//     }
//     }
// class Dog extends Animal{
//     constructor(name){
//         super(name);
//     }
// }
// const d=new Dog("Tom");


// //Getter/ Setter in js
// class user{
//     get message(){
//         return "Hello"
//     }
// }
// const u=new user();
// console.log(u.message);

// Setter ->it is used to validate the data
// ex:-
// class User{
//     set age(value){]if(value<0){
//         throw error("invalid age")
//     }
//     this._age=value;
// }}


// //static method in js
// // to access normal method in js
// user.greet();

// ex:-class Animal{
//     eat(){
//         console.log("eating")
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log("Wooooooo")
//     }
// }
// const d=new Dog();
// d.bark();
// d.eat();


// DAY 4-5->

// Error Handling and Modules

// ERROR->
// TYPES OF ERROR:-
// 1.Reference Error-variable does not exist
// ex:- console.log(Age);

// 2.Type Error:-it means galat datatype se operation (Jab aab alag var per different data type lagaya)
// ex:-
//  let num=10;
// num.toUpperCase();

// 3. Syntax Error:-Programming grammer galat hogi or rules follow karna hai
// ex:-
// let num=10;
// num.toUpperCase(;

// 4. Range error:-(Out of bound)kuch limit se jada min or max  limit tak isa bhar koi kam karaga to ya error ayaga
// we did not give negative size of array.
// ex:-
// let arr=new Array(-9)

// 5.Runtime error:-

// Try Catch Block in javascript:-

// try{
// //jo bhi kam krna hai karo}
// catch{
// //agar kam nahu hota hai mere pass aa jao}

// Ex:- without catch and try
// console.log("A")
// console.log(user.name);
// console.log("B");
// Output:-
// A
// Error

// ->With try and catch block:-

// console.log("A");
// try{
// console.log(user.name);
// catch(error){
// //console.log(error.name);
// //console.log(error.message);

// console.log("Error Handled Successfully);
// }
// finally{
// //kuch ho ya na ho does not care but finally it run if try and catch ho ya na ho finally to halaga.
// }
// console.log("B");

// output:-A
// Error Handled
// B


// Throw in error handling-> 
// ex:- let age=17
// if(age<18){
// throw new Error(
// "You are not Eligible")}

// Modular Programming:->import,export,module.exports and require.
// sabhi alag alag kam ka liya alag alag file banagya 
// if any type of error come it does not affect the remeaing part .
// ->Project->5000lines of code=> login,order history,dispatched,signup,order,etc work
// new.js                                                        old.js
// const a=5;
// export default const a=5;	                               import{a} from"./new.js"



// Module.exports:-                                                   require
// const a=5;
// module.exports={a}	                                              const{a}=require("./new.js")
//                                                                        console.log(a)



// Dynamic import->a feature that allows you to load modules asynchronously and on-demand at runtime using the import() syntax. 
// lazy loadig:-> Lazy loading is the architectural pattern of delaying the initialization or loading of resources (like scripts, components, or images) until the moment they are actually required (e.g., when a user clicks a button, opens a modal, or scrolls to a section). Dynamic import is the mechanism used to achieve lazy loading in JavaScript



// Dom:-(Document Object Model)
// <html>
// <head>
// <title>My Page</title>
// <body>
// <h1>My first Page</h1></body>
// </html>

// Dom-Tree:-convert into object form
//  Html
// /    \
// Head body
// /       \
// title      h1,img,button

// convert=>
// const html={
// hed:{
// children:[{
// head:{
// ]}

// {tagName:"html,
// children:[
// {
// tagName:"head",
// children:[]},{
// tagName:"body",
// children:[
// {tagName:"h1",text:"My First heading},
// {tagName:"Img:src:"url"
// alttext:"myphoto"}
// ]]}

// Element Selection:
// ->QuerySelector->for selecting one element one element at a time and first occuring as well.
// ->Queryselectorall->selecting all elements,it will return nodelist.

// Dom Traversal
// Dom Manipulation
// 1.Text content
// Events->
// 1.click
// 2.Double click
// 3.Typing.hover
// 5.Submit
// 6.Scrool
// 7.Resize
// 8.Drag
// 9.Drop
// all of these are events.

// AddEventListener->
// element.addeventlistener(
// eventName,CallbackFunction);

// How an eventListner works internally?
// Listener Register
//        |
// to wait for occuring that event
//            |
// anyone triggered the event
//         |
// callback function will be executed

// Event Bubbling:- browser event ko travel karat hai
// sequence:-Document->html->body->div->button
// const parent=document.queryselector("#parent");
// const child=document.queryselector("#child");
// parent.addEventListener(
// "click",()=>{
// console.log("parent")});

// child.addEventListener(
// "click",()=>{
// console.log("child")});

// Event Delegation:-instead of applyinf operation ovdr each ad every element if we will apply an operation(adding event listereners) on its parent element,that process will be more efficeient and kn own as event delegation.


// Day-6->
// Synchronous ->It is meant that there is only one thread and inside that your code runs.IT is single thread.
// async:-

// callStact:->LIFo(last in first out)
// Ex:-
// console.log("A")
// setTimeout(()=>{
// console.log("B");
// }2000);
// console.log(c);

// WebAPIs:->It is like a super power holded by browsers.
// 1.Settimeout
// 2.SetInterval
// 3.Dom Event
// 4.Api fetching

// callback Queue
// callback function:-
// when we will pass a function as argument then this will known as call back function.
// ex:=settimeout(()=>{},3000)
// ex:=setinterval(()=>{},2000)

// Callback Hell- Readiablity will be 10 to 0
// Login->get users->get orders->get payment->get address

// login(function(){
// getusers(function(){
// get orders(function(){
// getpayment(function(){
// getaddress(function(){
// })})})})})

// EX:-
// login(()=>{
// getuser(()=>{
// getRestaurant(()=>{
// getmenu(()=>{
// payment(()=>{
// })})})})})
// -we will solve this problem using promise chaing
// login()
// .then(getuser)
// .then(getResturants)
// .then(getmenu)
// .then(getpayment)
// .catch(error)
// DAY->7
//  Promises:-Promise ek object hai jo future me milna wala result ko represent krta hai.
// it comes with 3 states
// 1.Pending->abhi result nahi aya hai
// 2.Fullfilled(resolved)->kam successful
// 3.Rejected->kaam fail

//        Pending
//         /  \
//         /  \
// Resolved      Rejected

// synta:-
// const promise=new Promise((resolve,reject)=>{

// })

// ->Resolve and reject are built in functions of javascript.
// ex:=>
// const promise=new Promise((resolve,reject)=>{
// resolve("data found")

// })
// // hw to use (consume) promise
// promise.then((data)=>{
//     console.log(data);
// })



// ->how to handl reject in js in promise

// ex=>const promise=new Promise((resolve,reject)=>{

// reject("network error")
// })
// // hw to use (consume) promise
// promise.catch((error)=>{
//     console.log(error);
// })
 

// ->for handling reject we have to use .catch() method.

// ex:-
// const promise=new Promise((resolve,reject)=>{
//     let success=false;
//     if(success){
//         resolve("sucess")
//     }else{
//         reject("failed")
//     }
// })
// promise.then((data)=>{
//     console.log(data);
    
// }).catch((error)=>{
//     console.log(error);
// })

// ex:=>fetch("https://dummyjson.com/carts")
// .then((data)=>{
//     return data.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// Real life ex:=>
// const result=fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(result);


// Promise chaning:- rule=>what ever return from then() automatically next then me chala jata hai.
// ex:->
// Promise.resolve(10)
// .then((num)=>{
//     return num*2;
// })
// .then((num)=>{
//     return num+5;
// })
// .then((num)=>{
//     console.log(num);
// })

// catch propogation:-> promise chain me kahi bhi error aayegi to vo error automatically neche wale nearest catch block tak travel krti hai.
// ->agar hm chaya to ptomise chain me catch bloack ke bad then block again execute kr sakta hai.
// ex:-
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

// finally:->chahe then chala ya na chal.catch chale ya na chala finally ke andar likha gya code hmesha execute kiya jayega.

// Methods of promise:-
// 4. Promise.all():->jab hamko multiple promsies ko paralley run karna hota ha then we have to use promise all.
// condtion:-sare promise successful execute honi Chaya.

// ex:->Promise.all([
//     Promise.resolve("Milk"),
//     Promise.reject("error"),
//     Promise.resolve("Tea")
// ])
// .catch(console.log)

// 5. Promise.allSettled():->ye sabhi promise ka result dikhaga chahe vo pass ho ya fail.

// EX:-Promise.allSettled([
//     Promise.resolve("Milk"),
//     Promise.reject("error"),
//     Promise.resolve("Tea"),
// Promise.reject("Day")
// ])
// .then(console.log)

// 6.Promise.race():->jo sabse phle finish krega  whi execute kiya jayega.
// ->it is not mendatory always to execute only reaolve if reject will be done first then that will be executed first.

// ex:-const p1=new Promise (resolve=>{
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

// 7.Promise.any():->Jo phala successful promise ha wahi return karo aur failure ignore karo
// ex:-
// Promise.any([
//     Promise.reject("A"),
//     Promise.reject("B"),
//     Promise.resolve("C"),
// ]).then(console.log)
// callback function:-
// ex:-function getusers(callback){
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

// convert callback to promise:-

// ex:-function getusers(){
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

// HOW TO CONVERT A CALL BACK FUNCTION TO PROMISE???
// NORMAL FUNCTION:-
// FUNCTION TASK(CALLBACK){
// CALLBACK(DATA);}

// PROMISE VERSON:-
// FUNCTION TASK(){
// RETURN NEW PROMISE((REASOLVE,REJECT)=>{
// RESOLVE(DATA);})}

// DAY 8->
// Async & Await in Js:->login->getuser->getorder->getproducts->getpayment->generate invoice->send mail
// -> initial idea was "can we write promise like synchronous way"??
// ->Async->it is function which always return a promise.
// ex:-async function greet(){
//     return "Hello";
// }
// console.log(greet());

// ex:-async function getNumber(){    -----------> return Promise.resolve(100);
//     return 100;
// }

// Await:->await ka simple sa itna matlab hai ki async functon se mile promise jab take complete nahi hota hai tab tak wait karna he.

// error handling in async await:-

// fetchData()
// .catch((err)=>{
// console.log(err);})

// async/await:->
// try{
// const data=await fetchData();}
// catch(err){
// console.log(err);}

// DAY11->
            //   fRONTEND USING REACT JS
// ->WHY REACT JS??
// USING DIFF ALGORITHUM:-https://www.geeksforgeeks.org/reactjs/what-is-diffing-algorithm/
// Reconcilation->Purane virtual dom aur naye virtual dom ko compare krke actual
//  dome me minimum changes karna.
// cdn links-it is used to define react powers content delivering network
// React.createElement method is used to create an html element in react js.
// i->Type of Element
// ii->Additional details like id,class or inline css related things
// iii->content of that.

// Note:-React ka kaam h ui create krna aur React Dom ka kaam h usse browser pr dikhana.
// JSX->React.createelement se create krne ki jagah ab hm element ko create krn ke lie 
// JSX ka use karaga.
// const heding=<h1>hellow world</h1>
// Babel->it converts your Jsx into normal javacript code
// React.createElement("h1"{},"Hello World");

// To manage such large number of files in react,we will use the concept of bundlers.
// ->Partial Js->Hot module reloading(hmr)->jaise hi file me change hoga turant project ko reload.
// there are two ways->
// i->with the help of CRA(Create REact App)
// ii->To use third party BUNDLER Ex:-Vite
// CRA-> open terminal->Ran to cammand->npx create-react-app projectname
// to change folder use command npx create-react-app .
// Package.json->entir details of project

// npm init viTe
// dependencies:-
// who third party libranry which 
// node_modules:-man liya react ko chala ka liya 5 dependencies chaya whoo 5 hai a ko 
// chala na ka liya 5 chaya and b ko chalana ka liya 3 and another ko aur chaya and in
//  under five nedd more dependencies and again in more dependices chaya kisi ko chala
//  na ka liya.Uska andar who apni powers rakta hai and har ek dependency ki ek package json file hogi.
// src:-
// index.js->entery point
// app.js:-main point where i manage all content.

// ii->Vite
// Rules:-
// 1. we can not return two parent in jsx,it must have only one parent.
// 2. If we dont want to return div in that case simple use jsx fragment <>  </>
// 3. Inside of using class hee i have to use className

// Day12->
// components in react js->components is nothing just a block of ui that we want to use again and again
// two types:->1.functional component 2.Class based components

// functional components->ek js component hai jo ek value return karta hai
// Rules:-
// 1. jab kabhi bhi ek functional component hm create krege to uska name small letter se start nahi karna.

// React Props:->
// Jab hm basically ek Component se dusre component 















































