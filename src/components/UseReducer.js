import { useReducer, useState } from "react";

const initialSatate = {
  counter: 0,
};

const actions = {
  increment: "increment",
  decrement: "decrement",
  double: "double",
  half: "half,",
  reset: "reset",
  userData: 'userData',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.increment:
      return {
        counter: state.counter + 1,
      };
    case actions.decrement:
      return {
        counter: state.counter - 1,
      };
    case actions.double:
      return {
        counter: state.counter * 2,
      };
    case actions.half:
      return {
        counter: state.counter / 2,
      };
    case actions.reset:
      return {
        counter: initialSatate.counter,
      };
    case actions.userData:
      return {
        counter: action.payload
      }
    default:
      return {
        state,
      };
  }
};

export default function UseReducer() {
  const [state, dispacht] = useReducer(reducer, initialSatate);
  const [userDataInfo, setUserDataInfo] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispacht({ type: actions.userData, payload: userDataInfo})
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
