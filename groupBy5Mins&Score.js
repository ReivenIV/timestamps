//!Objective:
//* [✓] - Regroupe by day
//* [✓] - faire score par sub group (3sub groups) (15/08, 08/08, 02/08)
//* [✓] - group taille max 5 object
//* [✓] - retourner l'info sur une array d'object (user_id, score, date).

let inputsDicteVocal = [
  {
    id: 1111,
    date: "2022-08-04 06:05:44",
    score: 9,
  },
  {
    id: 1112,
    date: "2022-08-04 06:05:50",
    score: 100,
  },
  {
    id: 1113,
    date: "2022-08-04 06:06:00",
    score: 88,
  },
  {
    id: 1114,
    date: "2022-08-04 06:06:10",
    score: 12,
  },
  {
    id: 1115,
    date: "2022-08-04 06:06:20",
    score: 35,
  },
  //TODO other group
  {
    id: 1115,
    date: "2022-08-04 06:08:32",
    score: 35,
  },
  {
    id: 1115,
    date: "2022-08-04 06:08:32",
    score: 35,
  },
  {
    id: 1115,
    date: "2022-08-04 06:08:32",
    score: 35,
  },
  {
    id: 1115,
    date: "2022-08-04 06:08:32",
    score: 35,
  },
  {
    id: 1115,
    date: "2022-08-04 06:08:32",
    score: 35,
  },
];

//*Must be an empty object
let organizedDates = {};


const fiveMinut = 300000; 
for (let i = 0; i < inputsDicteVocal.length; i++) {
  //* Take timestamps from array
  let dates = new Date(inputsDicteVocal[i].date);
  //console.log(dates);

  //* Timestamps to number
  let times = Math.floor(dates.getTime() / fiveMinut);
  //console.log(times);

  //* From empty "array": "organizedDates", we add  _times_ as index = array with values or empty
  organizedDates[times] = organizedDates[times] || [];

  //* in every equal index we push the information in "inputsDicteVocal"
  organizedDates[times].push(inputsDicteVocal[i]);
}

//console.log(organizedDates);

let sortedbyTen = Object.values(organizedDates).map((d) => {
  let index = 0;
  let arr = [];
  while (index < d.length) {
    arr.push(d.slice(index, index + 5));
    index = index + 5;
  }
  return arr;
}).flat();

//console.log(sortedbyTen);

//!!
//* We create result:  amount of answers by /30 + average score + timestamp
const result = sortedbyTen.map((m) => {
  return {
    //Count quantity of answers made out of 5 questions
    questions: `${m.length}/5`,
    // Iterate over every nested object and get mean of them.
    averageScore:
      Math.floor(
        m.reduce((previousValue, currentValue) => {
          return previousValue + currentValue.score;
        }, 0) / m.length
      ) + "%",
    // Get first date of nested object.
    date: m.find((f) => f).date,
  };
});

// Final result
console.log(result);

