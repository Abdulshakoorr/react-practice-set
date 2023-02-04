import React, { useReducer } from 'react'


const intialValue = 10;
const reducer = (state,action) =>{
        if(action.type === "INCREMENT"){
            return state =  state + 1
        }
        if(state > 0 && action.type === "DECREMENT"){
      
            return state =  state - 1
         
        }
        return state;
    }

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer,intialValue)
  return (
    <div className='px-32 py-16 text-center' >
        <h1>UseReducer</h1>
        <p>Show Counter : {state}</p>
        {/* <p>Show name : {state.name}</p> */}
        <button onClick={()=> dispatch({type: "INCREMENT"})}>+</button>
        <button onClick={()=> dispatch({type: "DECREMENT"})}>-</button>
    </div>
  )
}

export default UseReducer