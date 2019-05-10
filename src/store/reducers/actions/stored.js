import * as actionTypes from "./actionTypes";

export const saveValue = value => {
  return {
    type: actionTypes.STORE_VALUE,
    value: value
  };
};

export const storeValue = value => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveValue(value));
    }, 2000);
  };
};

export const deleteValue = id => {
  return {
    type: actionTypes.DELETE_STORED_VALUE,
    id: id
  };
};
