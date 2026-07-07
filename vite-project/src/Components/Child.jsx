import React from 'React'
const child=React.memo(({hello})=>{
    console.log("Child Component Rendered");
    return(
        <button onClick={hello}>Say Hello</button>)
    });
    export default child;