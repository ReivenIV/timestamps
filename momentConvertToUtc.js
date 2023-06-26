const moment = require('moment-timezone');

let payload = {
  time: "2022-06-15 10:00:00",
  timezone: "Europe/Paris"
};

// Convert the time to UTC format with moment
let utcTime = moment.tz(payload.time, payload.timezone).utc().format('YYYY-MM-DD HH:mm:ss');

console.log(utcTime);
