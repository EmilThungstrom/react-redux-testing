import * as actionTypes from "./actions/actionTypes";

const initState = {
  counter: 0
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COUNTER_VALUE:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.SUB_COUNTER_VALUE:
      return {
        ...state,
        counter: state.counter - action.value
      };
  }
  return state;
};

export default reducer;
