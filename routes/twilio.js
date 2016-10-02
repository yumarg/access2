var accountSid = 'XXXXXX';
var authToken = 'XXXXXX';
//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

exports.client = client;