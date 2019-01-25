import { AsyncStorage } from "react-native";
import { getNowTimestamp, getDayStart, getWeekStart, getMonthStart } from "../utils/time";

const storeKeys = {
  dailyLimit: "dailyLimit",
  records: "records"
};

const DEFAULT_DAILY_LIMIT = 200;

export const getDailyLimit = async () => {
  try {
    const response = await AsyncStorage.getItem(storeKeys.dailyLimit);

    return response ? parseInt(response) : DEFAULT_DAILY_LIMIT;
  } catch (error) {
    console.error(error);
  }

  return DEFAULT_DAILY_LIMIT;
};

export const updateDailyLimit = async newDailyLimit => {
  try {
    await AsyncStorage.setItem(storeKeys.dailyLimit, newDailyLimit);
  } catch (error) {
    console.error(error);
  }
};

export const getAllRecords = async () => {
  try {
    const response = await AsyncStorage.getItem(storeKeys.records);
    const records = response ? JSON.parse(response) : [];

    return records;
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const getRecord = async timestamp => {
  const records = await getAllRecords();
  return records.find(record => record.timestamp === timestamp);
};

export const addRecord = async amount => {
  try {
    const records = await getAllRecords();
    records.push({
      timestamp: getNowTimestamp(),
      amount
    });
    await AsyncStorage.setItem(storeKeys.records, JSON.stringify(records));
  } catch (error) {
    console.error(error);
  }
};

export const getRecordsByTimeRange = async (from, to) => {
  const records = await getAllRecords();
  return records.filter(record => record.timestamp >= from && record.timestamp <= to);
};

export const getDayRecords = async () =>
  await getRecordsByTimeRange(getDayStart(), getNowTimestamp());
export const getWeekRecords = async () =>
  await getRecordsByTimeRange(getWeekStart(), getNowTimestamp());
export const getMonthRecords = async () =>
  await getRecordsByTimeRange(getMonthStart(), getNowTimestamp());

export const getRecordsTotal = records =>
  records.reduce((accumulator, record) => (accumulator += record.amount), 0);
