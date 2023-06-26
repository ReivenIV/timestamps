// Convertion Hours, Minutes and Seconds to Milliseconds

const timeString = "00:05:00";
const [hours, minutes, seconds] = timeString.split(":");
const totalMilliseconds =
  (parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds)) * 1000;
console.log(totalMilliseconds);
