import * as types from "./actionTypes";

export default (
  state = {
    currentRoute: null,
    rest: 0,
    dailyLimit: 0
  },
  { type, payload }
) => {
  switch (type) {
    case types.CHANGE_ROURE:
      return {
        ...state,
        currentRoute: payload.name
      };

    case types.RECEIVE_DAILY_LIMIT:
      return {
        ...state,
        dailyLimit: payload.value
      };

    case types.REQUEST_UPDATE_DAILY_LIMIT:
      return {
        ...state,
        dailyLimit: payload.value,
        rest: state.rest - (state.dailyLimit - payload.value)
      };

    case types.RECEIVE_TODAY_RECORD:
      return {
        ...state,
        rest: payload.value
      };

    case types.REQUEST_DECREASE_TODAY_RECORD:
      return {
        ...state,
        rest: state.rest - payload.value
      };

    default:
      return { ...state };
  }
};
