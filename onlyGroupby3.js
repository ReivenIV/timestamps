results = [
  {
    date: "2022-10-14T21:14:41.000Z",
    id: "1",
  },
  {
    date: "2022-10-14T21:15:48.000Z",
    id: "2",
  },
  {
    date: "2022-02-22T22:22:22.000Z",
    id: "2",
  },
  {
    date: "2022-02-22T22:22:22.000Z",
    id: "2",
  },
  {
    date: "2022-02-22T22:22:22.000Z",
    id: "2",
  },
  {
    date: "2022-02-22T22:22:22.000Z",
    id: "2",
  },
  {
    date: "2022-02-22T22:22:22.000Z",
    id: "2",
  },
  {
    date: "2022-02-22T22:22:22.000Z",
    id: "2",
  },
  {
    date: "2022-02-22T22:22:22.000Z",
    id: "2",
  },
  {
    date: "2022-09-20T18:16:01.000Z",
    id: "3",
  },
  {
    date: "2022-09-20T18:16:48.000Z",
    id: "4",
  },
  {
    date: "2022-09-20T21:14:52.000Z",
    id: "5",
  },
  {
    date: "2022-09-20T21:14:15.000Z",
    id: "6",
  },
  {
    date: "2022-09-20T21:14:03.000Z",
    id: "7",
  },
  {
    date: "2022-09-18T10:09:33.000Z",
    id: "8",
  },
  {
    date: "2022-09-18T10:08:12.000Z",
    id: "9",
  },
  {
    date: "2022-09-18T10:07:50.000Z",
    id: "10",
  },
];

function groupByDateMaxThreeItems(array) {
  index = 0;
  arr = [];
  result = [];
  array = array.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  for (item of array) {
    index = index + 1;
    if (index % 3 === 0 || !isSameDay(array[index - 1], item)) {
      result.push(arr);
      arr = [];
    }
    arr.push(item);
  }
  return result;
}

function isSameDay(item1, item2) {
  date1 = new Date(item1.date);
  date2 = new Date(item2.date);

  return (
    date1.getYear() + date1.getMonth() + date1.getDay() ==
    date2.getYear() + date2.getMonth() + date2.getDay()
  );
}

console.log(groupByDateMaxThreeItems(results));
