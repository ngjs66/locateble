const { MongoClient } = require('mongodb');
var BeaconScanner = require('node-beacon-scanner')
var scanner = new BeaconScanner();
var dateFormat = require('dateformat');

const uri = "mongodb+srv://user01:1234@blebeacon.htpi6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// start scanning 
scanner.startScan().then(() => {
	console.log('Started to scan');
}).catch((error) => {
	console.log(error);
});

// Event handler for beacons 
scanner.onadvertisement = (ad) => {
	//console.log(JSON.stringify(ad, null, ''));
	console.log(ad.address);
	// connect to Mongo - interface
	client.connect(err => {
		const collection = client.db("fyp-ble").collection("beacons");
		// perform actions on the collection object
		var myquery = { _beaconId: 1 };
		var newvalues = { $set: { _date: dateFormat() } };
			collection.updateOne(myquery, newvalues, function(err, res) {
			console.log("Db successfully started");
				if (err) throw err;
			});//.then(() => {
				//client.close();
				//console.log("Db connection closed ...");
			//});
		
	})
};



