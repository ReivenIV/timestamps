// We will shift all timestamps from all_times related to the difference between time_db and time_payload

let time_db = "2023-06-07 10:00:00";
let time_payload = "2023-06-07 14:11:11";

let all_times = [
  "2023-06-07 08:00:00",
  "2023-06-07 10:00:00",
  "2023-06-07 12:00:00",
  "2023-06-07 14:00:00",
  "2023-06-07 16:00:00",
  "2023-06-07 18:00:00",
  "2023-06-07 20:00:00",
  "2023-06-07 23:00:00"
];

if (time_db !== time_payload) {
  // Calculate the difference between time_payload and time_db in milliseconds
  let diff = new Date(time_payload) - new Date(time_db);


  // Update each timestamp in the all_times array
  for (let i = 0; i < all_times.length; i++) {
    // Convert the UTC timestamp to a Date object without adjusting for the local time zone
    let utcDate = new Date(all_times[i] + "Z");

    // Add the difference to the UTC timestamp
    utcDate.setTime(utcDate.getTime() + diff);
    // Format the timestamp to the desired format ("YYYY-MM-DD HH:mm:ss")
    let formattedTimestamp = utcDate.toISOString().replace(/T/, ' ').replace(/\.\d+Z$/, '');

    // Update the timestamp in the all_times array
    all_times[i] = formattedTimestamp;
  }
}

