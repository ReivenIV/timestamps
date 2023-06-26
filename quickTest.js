const moment = require("moment-timezone");

let time_db = "2023-06-14T14:00:00.000Z";
let time_payload = "2023-06-14 14:30:00";
let time_payload_formated = moment.tz(
  time_payload,
  "YYYY-MM-DD HH:mm:ss",
  "UTC"
);

let all_times = [
  "2023-06-14T10:00:00.000Z",
  "2023-06-14T12:00:00.000Z",
  "2023-06-14T14:00:00.000Z",
  "2023-06-14T16:00:00.000Z",
  "2023-06-14T18:00:00.000Z",
  "2023-06-14T20:00:00.000Z",
  "2023-06-14T22:00:00.000Z",
];

function updatedUpcomingTimes(timeDb, timePayload, allTimes) {
  if (timeDb !== timePayload) {
    let diff = new Date(timePayload) - new Date(timeDb);

    for (let i = 0; i < allTimes.length; i++) {
      let utcDate = new Date(allTimes[i]);
      utcDate.setTime(utcDate.getTime() + diff);
      let formattedTimestamp = utcDate
        .toISOString()
        .replace(/T/, " ")
        .replace(/\.\d+Z$/, "");
      allTimes[i] = formattedTimestamp;
    }
  }

  return allTimes;
}

console.log(updatedUpcomingTimes(time_db, time_payload_formated, all_times));
