// Here i receive a "payload" and a "selectedTimestamp" we need to keep the object with the given timestamps and the following ones. 

let payload = [
    {
      id: 57650,
      date: "2023-06-29T10:00:00.000Z",
    },
    {
      id: 57651,
      date: "2023-06-29T11:00:00.000Z",
    },
    {
      id: 57652,
      date: "2023-06-29T12:00:00.000Z",
    },
    {
      id: 57653,
      date: "2023-06-29T13:00:00.000Z",
    },
    {
      id: 57654,
      date: "2023-06-29T14:00:00.000Z",
    },
    {
      id: 57655,
      date: "2023-06-29T15:00:00.000Z",
    },
    {
      id: 57656,
      date: "2023-06-29T16:00:00.000Z",
    }
  ]

let selectedTimestamp = "2023-06-29T14:00:00.000Z";

let filteredPayload = payload.filter(obj => obj.date >= selectedTimestamp);

console.log(filteredPayload); 

// output 
/*
[
  { id: 57654, date: '2023-06-29T14:00:00.000Z' },
  { id: 57655, date: '2023-06-29T15:00:00.000Z' },
  { id: 57656, date: '2023-06-29T16:00:00.000Z' } 
]
*/