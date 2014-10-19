#!/usr/local/bin/node

var fs = require('fs');
var nodemailer = require('nodemailer');

var filename = "rates.txt";

fs.readFile(filename, 'utf8', function (err, data) {
	if (err) throw err;
	sendMail(data);
});

var transporter = nodemailer.createTransport({});

function sendMail(msg) {
  var mailOptions = {
		from: "sender@gmail.com", // sender address
		to:"rcvr@gmail.com", // list of receivers
		subject: "Currency Update", // Subject line
		text: msg,
		html: msg + "<br/><a href='https://data.sparkfun.com/streams/0llnrLvRyOFYXyv3yDD6'>View History</a>" +
					" | <a href='http://kwdtoinr.neocities.org/'>View Graph</a>"
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) { console.log(err); }
    else { console.log("Message sent: " + info.response); }
  });
}