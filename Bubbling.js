// Event Bubbling
const parent=document.querySelector("#parent");
const child=document.querySelector("#child");
parent.addEventListener(
"click",
()=>{
console.log("parent")
}
);

child.addEventListener(
"click",()=>{
console.log("child")}
);