var objs = [
  {
    name: 'Arsenal',
    points: 99,
    GD: 45,
  },
  {
    name: 'Chelsea',
    points: 88,
    GD: 40,
  },
  {
    name: 'Manchester United',
    points: 60,
    GD: 29,
  },
  {
    name: 'Liverpool',
    points: 88,
    GD: 40,
  },
];

function Array(a, b) {
  if (a.points < b.points) return 1;
  if (a.points > b.points) return -1;
  else {
    if (a.GD < b.GD) return 1;
    if (a.GD > b.GD) return -1;
  }
}
objs.sort(Array);
console.log(objs);
