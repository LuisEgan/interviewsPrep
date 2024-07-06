const getHighestPopulationYear = (people) => {
  const yearsDelta = {};

  people.forEach((p) => {
    yearsDelta[p.born] = (yearsDelta[p.born] || 0) + 1;
    yearsDelta[p.died + 1] = (yearsDelta[p.died + 1] || 0) - 1;
  });

  let biggestPopulationYear = 0;
  let biggestPopulation = 0;
  let yearsPopulation = 0;
  Object.keys(yearsDelta).forEach((year) => {
    yearsPopulation += yearsDelta[year];

    if (yearsPopulation > biggestPopulation) {
      biggestPopulationYear = year;
      biggestPopulation = yearsPopulation;
    }
  });

  return biggestPopulationYear;
};

const rest = getHighestPopulationYear([
  { born: 1900, died: 2000 },
  { born: 1800, died: 1900 },
  { born: 1950, died: 2000 },
  { born: 1900, died: 1950 },
  { born: 1750, died: 1800 },
  { born: 1800, died: 1900 },
  { born: 1850, died: 1950 },
]);
console.log("rest: ", rest);
