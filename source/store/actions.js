import * as types from "./actionTypes";
import {
  getDailyLimit,
  updateDailyLimit,
  getDayRecords,
  getRecordsTotal,
  addRecord
} from "../services/db";

export const changeRoute = name => ({
  type: types.CHANGE_ROURE,
  payload: { name }
});

export const requestDailyLimit = () => async dispatch => {
  dispatch({
    type: types.REQUEST_DAILY_LIMIT
  });

  const value = await getDailyLimit();

  dispatch({
    type: types.RECEIVE_DAILY_LIMIT,
    payload: { value }
  });

  return value;
};

export const requestUpdateDailyLimit = value => async dispatch => {
  dispatch({
    type: types.REQUEST_UPDATE_DAILY_LIMIT,
    payload: { value }
  });

  await updateDailyLimit(value);

  dispatch({
    type: types.RECEIVE_UPDATE_DAILY_LIMIT,
    payload: { value }
  });

  return true;
};

export const requestDaySum = () => async dispatch => {
  dispatch({
    type: types.REQUEST_DAY_SUM
  });

  const records = await getDayRecords();
  const sum = getRecordsTotal(records);

  dispatch({
    type: types.RECEIVE_DAY_SUM,
    payload: { sum }
  });

  return sum;
};

export const requestAddRecord = amount => async dispatch => {
  dispatch({
    type: types.REQUEST_ADD_RECORD,
    payload: { amount }
  });

  await addRecord(amount);

  dispatch({
    type: types.RECEIVE_ADD_RECORD,
    payload: { amount }
  });

  return true;
};
