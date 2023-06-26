// We passe from milliseconds to timestamps

const milliseconds = 1686852011000;
const date = new Date(milliseconds);
const timestamp = date
  .toISOString()
  .replace(/T/, " ")
  .replace(/\.\d+Z$/, "");

console.log(date);
console.log(timestamp);
