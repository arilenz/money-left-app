import { getDaysInMonth } from "../utils/time";

export const getLeftForDay = (sum, limit) => limit - sum;

export const getLeftForWeek = (sum, limit) => limit * 7 - sum;

export const getLeftForMonth = (sum, limit) => limit * getDaysInMonth() - sum;
