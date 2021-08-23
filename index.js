const { fetchMyIP, fetchCoordsByIP } = require('./iss');

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
  
    console.log('It worked! Returned coordinates: ', data);
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