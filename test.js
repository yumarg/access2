var accountSid = 'AC8ef3fd16fc3d4ef317c0682a7e042c78';
var authToken = '88996b1a40813eb97e32445aa494b49d';
//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);
client.messages.create({
	to: "+16262368385",
  	from: "+13106834424",
  	body: "The Access Van is arriving in less than a minute!"
}, function(err, message) {
  	console.log(err, message);
  	// res.json(message.sid);
});