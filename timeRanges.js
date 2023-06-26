// in these algo

const outputQuery = [
  {
    arm: "R",
    score: 3.01,
    date: "2022-10-15 08:56:27",
  },
  {
    arm: "L",
    score: 2.41,
    date: "2022-10-15 08:56:26",
  },
  {
    arm: "R",
    score: 3.72,
    date: "2022-10-03 05:53:03",
  },
  {
    arm: "L",
    score: 3.02,
    date: "2022-10-03 05:53:01",
  },
  {
    arm: "R",
    score: 2.64,
    date: "2022-10-02 12:02:27",
  },
  {
    arm: "L",
    score: 2.47,
    date: "2022-10-02 12:02:26",
  },
  {
    arm: "R",
    score: 2.58,
    date: "2022-10-02 06:38:31",
  },
  {
    arm: "L",
    score: 2.45,
    date: "2022-10-02 06:38:29",
  },
  {
    arm: "R",
    score: 3.57,
    date: "2022-10-01 05:48:42",
  },
  {
    arm: "L",
    score: 3.69,
    date: "2022-10-01 05:48:40",
  },
  {
    arm: "R",
    score: 3.01,
    date: "2022-10-01 05:18:14",
  },
  {
    arm: "L",
    score: 3.68,
    date: "2022-10-01 05:18:12",
  },
  {
    arm: "R",
    score: 2.41,
    date: "2022-09-30 11:24:55",
  },
  {
    arm: "L",
    score: 2.69,
    date: "2022-09-30 11:24:54",
  },
  {
    arm: "R",
    score: 3.69,
    date: "2022-09-30 07:28:45",
  },
  {
    arm: "L",
    score: 3.68,
    date: "2022-09-30 07:28:44",
  },
  {
    arm: "R",
    score: 3.86,
    date: "2022-09-29 15:08:30",
  },
  {
    arm: "L",
    score: 3.47,
    date: "2022-09-29 15:08:29",
  },
  {
    arm: "R",
    score: 3.59,
    date: "2022-09-29 15:01:41",
  },
  {
    arm: "L",
    score: 2.81,
    date: "2022-09-29 15:01:39",
  },
  {
    arm: "R",
    score: 3.31,
    date: "2022-09-25 14:19:24",
  },
  {
    arm: "L",
    score: 3.5,
    date: "2022-09-25 14:19:22",
  },
  {
    arm: "R",
    score: 2.43,
    date: "2022-09-25 10:21:45",
  },
  {
    arm: "L",
    score: 2.56,
    date: "2022-09-25 10:21:43",
  },
  {
    arm: "R",
    score: 3.37,
    date: "2022-09-24 20:15:48",
  },
  {
    arm: "L",
    score: 3.64,
    date: "2022-09-24 20:15:47",
  },
  {
    arm: "R",
    score: 3.76,
    date: "2022-09-24 20:15:12",
  },
  {
    arm: "L",
    score: 3.64,
    date: "2022-09-24 20:15:11",
  },
  {
    arm: "R",
    score: 2.86,
    date: "2022-09-24 18:42:14",
  },
  {
    arm: "L",
    score: 3.24,
    date: "2022-09-24 18:42:12",
  },
  {
    arm: "R",
    score: 3.02,
    date: "2022-09-24 17:51:01",
  },
  {
    arm: "L",
    score: 3.48,
    date: "2022-09-24 17:51:00",
  },
  {
    arm: "R",
    score: 3.1,
    date: "2022-09-22 09:09:15",
  },
  {
    arm: "L",
    score: 3.77,
    date: "2022-09-22 09:09:14",
  },
  {
    arm: "R",
    score: 1.96,
    date: "2022-09-22 07:43:00",
  },
  {
    arm: "L",
    score: 2.63,
    date: "2022-09-22 07:42:59",
  },
  {
    arm: "R",
    score: 2.56,
    date: "2022-09-22 06:41:22",
  },
  {
    arm: "L",
    score: 3.71,
    date: "2022-09-22 06:41:21",
  },
  {
    arm: "R",
    score: 3.12,
    date: "2022-09-22 05:58:37",
  },
  {
    arm: "L",
    score: 3.82,
    date: "2022-09-22 05:58:35",
  },
  {
    arm: "R",
    score: 3.72,
    date: "2022-09-21 17:23:49",
  },
  {
    arm: "L",
    score: 3.68,
    date: "2022-09-21 17:23:48",
  },
  {
    arm: "R",
    score: 3.86,
    date: "2022-09-21 16:21:47",
  },
  {
    arm: "L",
    score: 3.38,
    date: "2022-09-21 16:21:45",
  },
  {
    arm: "R",
    score: 3.4,
    date: "2022-09-21 14:18:32",
  },
  {
    arm: "L",
    score: 3.39,
    date: "2022-09-21 14:18:31",
  },
  {
    arm: "R",
    score: 2.55,
    date: "2022-09-21 12:34:29",
  },
  {
    arm: "L",
    score: 2.8,
    date: "2022-09-21 12:34:28",
  },
  {
    arm: "R",
    score: 3.65,
    date: "2022-09-21 12:23:33",
  },
  {
    arm: "L",
    score: 3.26,
    date: "2022-09-21 12:23:32",
  },
  {
    arm: "R",
    score: 3.83,
    date: "2022-09-21 11:45:25",
  },
  {
    arm: "L",
    score: 3.46,
    date: "2022-09-21 11:45:23",
  },
  {
    arm: "R",
    score: 1.65,
    date: "2022-09-21 08:52:00",
  },
  {
    arm: "L",
    score: 3.69,
    date: "2022-09-21 08:51:58",
  },
  {
    arm: "R",
    score: 3.75,
    date: "2022-09-21 08:13:30",
  },
  {
    arm: "L",
    score: 2.76,
    date: "2022-09-21 08:13:29",
  },
];

const booleanRanger = [[], []];

outputQuery.forEach((row) => {
  if (row.arm === "L") booleanRanger[0].push(row);
  if (row.arm === "R") booleanRanger[1].push(row);
});

//console.log(booleanRanger);

const ranges = [
  { name: "0h", start: "00:00", end: "06:29" },
  { name: "8h", start: "06:00", end: "09:29" },
  { name: "11h", start: "09:30", end: "12:29" },
  { name: "14h", start: "12:30", end: "15:29" },
  { name: "17h", start: "15:30", end: "18:29" },
  { name: "20h", start: "18:30", end: "23:29" },
];

const groupByTimeRange = booleanRanger[0].reduce((acc, cur) => {
  const time = cur.date.slice(0, -8); // many ways to skin a cat
  // console.log(time);
  const range = ranges.find(
    (range) => time >= range.start && time <= range.end
  ); // find returns the first found
  const name = range.name;
  (acc[name] = acc[name] || []).push(cur); // (if there, reuse, otherwise create) then push
  return acc;
}, {});

//console.log(groupByTimeRange);

const results = Object.entries(groupByTimeRange).map(([key, val]) => {
  const sum = val.reduce((a, b) => {
    return a + b.score;
  }, 0);
  const avg = Math.round(sum / val.length);
  return { timeRange: key, AverageScore: avg };
});

//console.log(results);
