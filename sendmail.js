#!/usr/bin/node

var fs = require('fs');
var mail = require('nodemailer').mail;

var filename = "rates.txt";

fs.readFile(filename, 'utf8', function (err, data) {
	if (err) throw err;
	sendMail(data);
});

function sendMail(msg) {
	mail({
		from: "sender@gmail.com", // sender address
		to:"listofrecievers", // list of receivers
		subject: "Currency Update", // Subject line
		text: msg,
		html: msg + "<br/><a href='https://data.sparkfun.com/streams/0llnrLvRyOFYXyv3yDD6'>View History</a>" +
					" | <a href='http://kwdtoinr.neocities.org/'>View Graph</a>"
	});
}

