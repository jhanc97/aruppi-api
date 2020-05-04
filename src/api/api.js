var parseString = require('xml2js').parseString;
var https = require('https');
const {
  BASE_ANIMEFLV_URL,
  BASE_JIKAN_URL,
  FEED_KUDASAI
} = require('./urls');

const news = async() =>{

  var jsonresult = ""

  function xmlToJson(url, callback) {
  var req = https.get(url, function(res) {
    var xml = '';

    res.on('data', function(chunk) {
      xml += chunk;
    });

    res.on('error', function(e) {
      callback(e, null);
    });

    res.on('timeout', function(e) {
      callback(e, null);
    });

    res.on('end', function() {
      parseString(xml, function(err, result) {
        callback(null, result);
      });
    });
  });
  }

  xmlToJson(FEED_KUDASAI, function(err, data) {
    if (err) {
      return console.err(err);
    }
    jsonresult = data
    console.log(JSON.stringify(data, null, 2));
  })
  return await Promise.all(jsonresult);

};


module.exports = {
  news
};
