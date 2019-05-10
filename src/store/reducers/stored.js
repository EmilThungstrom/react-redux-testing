import * as actionTypes from "./actions/actionTypes";

const initState = {
  stored: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.STORE_VALUE:
      return {
        ...state,
        stored: state.stored.concat({ id: Date(), value: action.value })
      };
    case actionTypes.DELETE_STORED_VALUE:
      const newArray = state.stored.filter(el => el.id !== action.id);
      return {
        ...state,
        stored: newArray
      };
  }
  return state;
};

export default reducer;
