// Here we need the Ids of objs bigger that time_end to erase from the DB. If a date of "upcomingPayload" is bigger than payload.time_end we will push the id into "collectedId" array.

/* 1)  payload.time_end is in local time  
       - transform it into UTC 

   2)  With time_end in UTC compare every date of the array "upcomingPayload" 

   3)  Collect the Ids into the array "collectedId"
*/
const moment = require("moment-timezone");

let collectedId = [];

let upcomingPayload = [
  {
    id: 56771,
    user_id: 113,
    date: "2023-06-26T15:05:00.000Z",
  },
  {
    id: 56772,
    user_id: 113,
    date: "2023-06-26T16:05:00.000Z",
  },
  {
    id: 56773,
    user_id: 113,
    date: "2023-06-26T17:05:00.000Z",
  },
  {
    id: 56774,
    user_id: 113,
    date: "2023-06-26T18:05:00.000Z",
  },
  {
    id: 56775,
    user_id: 113,
    date: "2023-06-26T19:05:00.000Z",
  },
  {
    id: 56776,
    user_id: 113,
    date: "2023-06-26T20:05:00.000Z",
  },
];

let payload = {
  created_at: "2023-06-26T13:16:44.000Z",
  time_end: "20:06",
  timezone: "Europe/Paris",
};

let createdAtDate = moment(payload.created_at).format("YYYY-MM-DD");
let datetime = createdAtDate + " " + payload.time_end;
let utcTime = moment.tz(datetime, payload.timezone).utc().format("HH:mm");


collectedId = upcomingPayload.map((object) => {
  let objectDate = new Date(object.date);
  let endTime = new Date(`${createdAtDate}T${utcTime}:00.000Z`);

  if (objectDate > endTime) {
    return object.id;
  }
}).filter(Boolean);



console.log(collectedId);
