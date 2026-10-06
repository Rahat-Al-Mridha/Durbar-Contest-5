function getDayOfWeek(year, month, day) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const date = new Date(year, month - 1, day);

  return weekdays[date.getDay()];
}

console.log(getDayOfWeek(2024, 5, 11))
console.log(getDayOfWeek(2023, 1, 1))