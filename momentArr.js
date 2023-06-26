const moment = require("moment-timezone");

let payload = [
  {
    id: 502,
    user_id: 113,
    quantity_mg: 10,
    tablets: 2,
    timezone: "Europe/Paris",
    time_start: "10:00",
    time_end: "12:00",
    time_interval: "02:00",
    created_at: "2023-06-05T08:39:12.000Z",
    drug_name: "test morning",
  },
  {
    id: 503,
    user_id: 113,
    quantity_mg: 10,
    tablets: 2,
    timezone: "Africa/Addis_Ababa",
    time_start: "10:00",
    time_end: "12:00",
    time_interval: "01:00",
    created_at: "2023-06-05T08:41:37.000Z",
    drug_name: "test afternoon",
  },
];

// for (let i = 0; i < payload.length; i++) {
//   payload[i].time_start = moment.tz(payload[i].time_start, "HH:mm", payload[i].timezone).utc().format("HH:mm");
//   payload[i].time_end = moment.tz(payload[i].time_end, "HH:mm", payload[i].timezone).utc().format("HH:mm");
// }

payload.forEach((obj) => {
  obj.time_start = moment
    .tz(obj.time_start, "HH:mm", obj.timezone)
    .utc()
    .format("HH:mm");
  obj.time_end = moment
    .tz(obj.time_end, "HH:mm", obj.timezone)
    .utc()
    .format("HH:mm");
});

console.log(payload);

// const updatedPayload = payload.map(obj => {
//   return {
//     ...obj,
//     time_start: moment.tz(obj.time_start, "HH:mm", obj.timezone).utc().format("HH:mm"),
//     time_end: moment.tz(obj.time_end, "HH:mm", obj.timezone).utc().format("HH:mm")
//   };
// });

// console.log(updatedPayload);

// for (let obj of payload) {
//   obj.time_start = moment.tz(obj.time_start, "HH:mm", obj.timezone).utc().format("HH:mm");
//   obj.time_end = moment.tz(obj.time_end, "HH:mm", obj.timezone).utc().format("HH:mm");
// }

// console.log(payload);

// for (let index in payload) {
//   let obj = payload[index];
//   obj.time_start = moment.tz(obj.time_start, "HH:mm", obj.timezone).utc().format("HH:mm");
//   obj.time_end = moment.tz(obj.time_end, "HH:mm", obj.timezone).utc().format("HH:mm");
// }

// console.log(payload);

// let payload2 = "10:00";
// let timezone = "Europe/Paris";
// const eachTimeUtc = moment.tz(payload2, "HH:mm", timezone).utc().format("HH:mm");
// console.log(eachTimeUtc);
