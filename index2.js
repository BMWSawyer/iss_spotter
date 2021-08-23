const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require('./index');

nextISSTimesForMyLocation()
  .then((result) => {
    printPassTimes(result);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
