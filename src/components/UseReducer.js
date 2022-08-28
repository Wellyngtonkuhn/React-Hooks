import { useReducer, useState } from "react";

import { actions } from "../reducer/actions/actionsCounter";

import { counterReducers } from "../reducer/reducers/counterReducers";
import { initialSatate } from "../reducer/reducers/counterReducers";


export default function UseReducer() {
  const [state, dispacht] = useReducer(counterReducers, initialSatate);
  const [userDataInfo, setUserDataInfo] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispacht({ type: actions.userData, payload: userDataInfo });
  };

  return (
    <>
      <h1>UseReducer</h1>
      <h2>Counter: {state.counter}</h2>
      <button onClick={() => dispacht({ type: actions.decrement })}>- 1</button>
      <button onClick={() => dispacht({ type: actions.increment })}>+ 1</button>
      <button onClick={() => dispacht({ type: actions.double })}>x 2</button>
      <button onClick={() => dispacht({ type: actions.half })}>/ 2</button>
      <button onClick={() => dispacht({ type: actions.reset })}>Resetar</button>
      <br />
      <br />
      <form onSubmit={handleFormSubmit}>
        <label>
          Insira um valor personalizado:
          <input
            type="number"
            value={userDataInfo}
            onChange={(e) => setUserDataInfo(Number(e.target.value))}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      <br />
      <br />
    </>
  );
}
