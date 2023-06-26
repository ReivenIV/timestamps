const moment = require('moment-timezone');

let payload = [
  {
    id: 918,
    user_id: 113,
    drug_name: 'Test_1',
    quantity_mg: 100,
    time: [ '10:00', '12:00' ],
    tablets: 1,
    created_at: '2023-06-05T12:41:52.000Z',
    timezone: 'Europe/Paris'
  },
  {
    id: 919,
    user_id: 113,
    drug_name: 'Test_2',
    quantity_mg: 100,
    time: [ '10:00', '12:00' ],
    tablets: 1,
    created_at: '2023-06-05T12:42:14.000Z',
    timezone: 'Africa/Addis_Ababa'
  }
];

//* 2 maps
payload = payload.map((eachObj) => {
  const updatedTime = eachObj.time.map((eachTime) => {
    const eachTimeUtc = moment
      .tz(eachTime, "HH:mm", eachObj.timezone)
      .utc()
      .format("HH:mm");
    return eachTimeUtc;
  });

  return { ...eachObj, time: updatedTime };
});

//* 2 forEach
// payload.forEach((eachObj) => {
//   eachObj.time.forEach((eachTime, index) => {
//     const eachTimeUtc = moment
//       .tz(eachTime, "HH:mm", eachObj.timezone)
//       .utc()
//       .format("HH:mm");
//     eachObj.time[index] = eachTimeUtc;
//   });
// }); 


//* for of
// for (const eachObj of payload) {
//   const updatedTime = [];
//   for (const eachTime of eachObj.time) {
//     const eachTimeUtc = moment
//       .tz(eachTime, "HH:mm", eachObj.timezone)
//       .utc()
//       .format("HH:mm");
//     updatedTime.push(eachTimeUtc);
//   }
//   eachObj.time = updatedTime;
// }


// for (const eachObj of payload) {
//   const updatedTime = [];
//   for (const index in eachObj.time) {
//     const eachTime = eachObj.time[index];
//     const eachTimeUtc = moment
//       .tz(eachTime, "HH:mm", eachObj.timezone)
//       .utc()
//       .format("HH:mm");
//     updatedTime[index] = eachTimeUtc;
//   }
//   eachObj.time = updatedTime;
// }




console.log(payload);
