
let payload = [
  { id: 1, date: 1317906596 },
  { id: 7, date: 1317979232 },
  { id: 8, date: 1317986965 },
  { id: 9, date: 1318582119 },
  { id: 10, date: 1318595862 },
  { id: 11, date: 1318849982 }
];

//converting number to timestamp 
//! Super important to keep *1000 otherwise you will get 1970
console.log( new Date (payload[1].date * 1000));


//* map
let updatedPayload = payload.map((eachObj)=>{
  const changedDate = new Date(eachObj.date * 1000)
   return { ...eachObj, date: changedDate };
})

//* forEach
// payload.forEach(obj =>{
//     obj.date = new Date (obj.date * 1000)
// })


console.log(payload);
console.log(updatedPayload);
