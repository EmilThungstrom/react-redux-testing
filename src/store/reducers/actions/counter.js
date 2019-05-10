import * as actionTypes from "./actionTypes";

export const addCounterValue = value => {
  return {
    type: actionTypes.ADD_COUNTER_VALUE,
    value: value
  };
};

export const subCounterValue = value => {
  return {
    type: actionTypes.SUB_COUNTER_VALUE,
    value: value
  };
};
