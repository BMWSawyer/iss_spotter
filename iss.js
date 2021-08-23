const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    
    if (error) {
      callback(error, null);
      return;
    }
    
    if (response.statusCode !== 200) {
      const message = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(message), null);
      return;
    }
    
    const data = JSON.parse(body);
    callback(null, data.ip);

  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, (err2, response, body) => {
    
    if (err2) {
      callback(err2, null);
      return;
    }
    
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    
    const { latitude, longitude } = JSON.parse(body);
    
    callback(null, { latitude, longitude });

  });
};

const fetchISSFlyOverTimes = function(coords, callback) {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, (err3, response, body) => {
    
    if (err3) {
      callback(err3, null);
      return;
    }
    
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching the ISS flyover times. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    
    const passes = JSON.parse(body).response;
    
    callback(null, passes);

  });
}

module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes
};