import { useReducer, useState } from "react"
import { decrement, increment } from "../store/actions";
import { DECREMENT, INCREMENT } from "../store/actionsType";
import { initState, reducer } from "../store/reducer"

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [inputStateIncr, setStateInputIncr] = useState(0);
  const [inputStateDecr, setStateInputDecr] = useState(0);

  const handleClickIncr = () => {
    dispatch(increment(inputStateIncr));
  }
  const handleClickDecr = () => {
    dispatch(decrement(inputStateDecr));
  }

  const handleChange = ({ target: { value } }, callback) => {
    callback(+value);
  }
  return (
    <div>
      <button onClick={() => handleClickIncr()}>Increment</button>
      <input type='text' onChange={e => handleChange(e, setStateInputIncr)}></input>

      <span>{state.count}</span>

      <button onClick={() => handleClickDecr()}>Decrement</button>
      <input type='text' onChange={e => handleChange(e, setStateInputDecr)}></input>
    </div>
  )
}