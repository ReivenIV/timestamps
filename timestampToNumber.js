//*Answers founded on:
//https://stackoverflow.com/questions/9873197/how-to-convert-date-to-timestamp


function toTimestamp(strDate) {
  var datum = Date.parse(strDate);
  return datum / 1000;
}


console.log(toTimestamp("1970-10-14T21:15:48.000Z")); // will log : 24786948


