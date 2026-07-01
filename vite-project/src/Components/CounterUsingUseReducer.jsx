import React, { useReducer } from 'react'


    const initialState={
        count:0
    }
    function reducer(state,action){
        switch(action.type){
            case "incriment":
            return{
                count:state.count+1
            }
            case "decrement":
            return{
                count:state.count-1
            }
            default:
                return state
        }
        
    }
    const CounterUsingUseReducer = () => {
        const[State,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <h1>{State.count}</h1>
      <button onClick={()=>dispatch({type:"incriment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})} >Decrement</button>
    </div>
  )
}

export default CounterUsingUseReducer
