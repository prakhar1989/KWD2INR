var casper = require('casper').create();

var home_url = "https://applications2.almullagroup.com/onlineremit/faces/infrastructure/EXLogin.jspx";
var rate;
var sparkfun_url = "https://data.sparkfun.com/input/0llnrLvRyOFYXyv3yDD6?private_key=D66kdxAZyqiEyJAeJzzr&INR="
var clear = "http://data.sparkfun.com/input/0llnrLvRyOFYXyv3yDD6/clear?private_key=D66kdxAZyqiEyJAeJzzr"

casper.start(home_url);

casper.waitForSelector("form#form1");

casper.then(function() {
    // click on cash on delivery
    this.fill('form[name="form1"]',{ 'showrate' : '2'});
    this.click('input[type=submit]')
});


casper.then(function(){
    var rate = this.getHTML('tr:nth-child(4) td:nth-child(4) span');
    this.echo("AMX REMIT RATE - Rs." +  rate);
		this.open(sparkfun_url + rate);
});

casper.run();
