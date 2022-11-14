const DAYS_IN_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const getForecastDays = (apiArray: []) => {
  const currentDay = new Date().getDay();
  return DAYS_IN_WEEK.slice(currentDay, DAYS_IN_WEEK.length)
    .concat(DAYS_IN_WEEK.slice(0, currentDay))
    .slice(0, apiArray.length);
};

export default getForecastDays;
