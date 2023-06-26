// Here we transform paylaod.time_end to UTC using "YYYY-MM-DD" from created_at (remember some months of the year is -/+1 or -/+2 hours is really important to have the day and the month.)

const moment = require("moment-timezone");

let payload = {
  created_at: "2023-06-26T13:16:44.000Z",
  time_end: "18:00",
  timezone: "Europe/Paris",
};

let createdAtDate = moment(payload.created_at).format("YYYY-MM-DD");
let timeEnd = payload.time_end;

let datetime = createdAtDate + " " + timeEnd;

let utcTime = moment.tz(datetime, payload.timezone).utc().format("HH:mm");

console.log(utcTime);
