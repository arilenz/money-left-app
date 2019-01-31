export const getNow = () => new Date();

export const getNowTimestamp = () => getNow().getTime();

export const getDayStart = (date = getNow()) => date.setHours(0, 0, 0, 0);

export const getWeekStart = (date = getNow()) => {
  const day = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
  return new Date(date.getFullYear(), date.getMonth(), day).getTime();
};

export const getMonthStart = (date = getNow()) =>
  new Date(date.getFullYear(), date.getMonth(), 1).getTime();

export const getDaysInMonth = (date = getNow()) =>
  new Date(date.getFullYear(), date.getMonth(), 0).getDate();
