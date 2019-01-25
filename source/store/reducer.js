import { combineReducers } from "redux";
import * as types from "./actionTypes";

const router = (state = { current: null }, { type, payload }) => {
  switch (type) {
    case types.CHANGE_ROURE:
      return {
        ...state,
        current: payload.name
      };

    default:
      return { ...state };
  }
};

const values = (
  state = {
    daySum: 0,
    dailyLimit: 0
  },
  { type, payload }
) => {
  switch (type) {
    case types.RECEIVE_DAILY_LIMIT:
      return {
        ...state,
        dailyLimit: payload.value
      };

    case types.REQUEST_UPDATE_DAILY_LIMIT:
      return {
        ...state,
        dailyLimit: payload.value
      };

    case types.RECEIVE_PERIODS:
      return {
        ...state,
        daySum: payload.daySum,
        weekSum: payload.weekSum,
        monthSum: payload.monthSum
      };

    default:
      return { ...state };
  }
};

export default combineReducers({
  router,
  values
});
