import { AsyncStorage } from "react-native";
import { todayFormatted } from "../utils/time";

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
    const currentDailyLimit = await getDailyLimit();
    const difference = currentDailyLimit - parseInt(newDailyLimit);

    await AsyncStorage.setItem(storeKeys.dailyLimit, newDailyLimit);
    await decreaseTodayRecord(difference);
  } catch (error) {
    console.error(error);
  }
};

export const getAllRecords = async () => {
  try {
    const response = await AsyncStorage.getItem(storeKeys.records);
    const records = response ? JSON.parse(response) : {};

    return records;
  } catch (error) {
    console.error(error);
  }

  return {};
};

export const getRecord = async timestamp => {
  const dailyLimit = await getDailyLimit();
  const records = await getAllRecords();
  return records[timestamp] ? parseInt(records[timestamp]) : dailyLimit;
};

export const getTodayRecord = async () => await getRecord(todayFormatted());

export const updateRecord = async (timestamp, value) => {
  const records = await getAllRecords();
  records[timestamp] = value;

  try {
    await AsyncStorage.setItem(storeKeys.records, JSON.stringify(records));
  } catch (error) {
    console.error(error);
  }
};

export const updateTodayRecord = async value => await updateRecord(todayFormatted(), value);

export const decreaseTodayRecord = async value => {
  const currentValue = await getTodayRecord();
  const updatedValue = currentValue - parseInt(value);
  await updateTodayRecord(updatedValue);
};
