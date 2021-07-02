
import './App.css';
import {useReducer} from "react";

function reducer (state, action){
    switch (action.type)
    {
        case 'INC_A':
            return {...state, a:state.a + action.payload};
        case 'INC_B':
            return {...state, b:state.b + action.payload};
        default:
            return {...state};
    }
}


function App() {

  let [{a,b}, dispatch] = useReducer(reducer, {a:0, b:0});
console.log(a,b);

  return (
    <div >
        <button onClick={()=> dispatch({type: 'INC_A', payload: 1})}>click A{a}</button>
        <button onClick={()=> dispatch({type: 'INC_B', payload: 2})}>click B{b}</button>
    </div>
  );
}

export default App;
