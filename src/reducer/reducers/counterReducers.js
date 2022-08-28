import { actions } from "../actions/actionsCounter";

export const initialSatate = {
  counter: 0,
};

export const counterReducers = (state, action) => {
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
        counter: action.payload,
      };
    default:
      return {
        state,
      };
  }
};
