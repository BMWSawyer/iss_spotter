const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log('It didn\'t work!', error);
    return;
  }

  fetchCoordsByIP(ip, (err2, data) => {
    if (err2) {
      console.log('It didn\'t work!', err2);
      return;
    }
  
    fetchISSFlyOverTimes(data, (err3, data) => {
      if (err3) {
        console.log('It didn\'t work!', err3);
        return;
      }

      console.log(data);
    });
  });
});


/*
fetchCoordsByIP(fetchMyIP(), (err2, data) => {
  if (err2) {
    console.log('It didn\'t work!', err2);
    return;
  }

  console.log(data);
});
*/