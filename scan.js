const { MongoClient } = require('mongodb');
var BeaconScanner = require('node-beacon-scanner')
var scanner = new BeaconScanner();
var dateFormat = require('dateformat');
var isoDate = require("isodate");
var moment = require("moment");
const PushNotifications = require('@pusher/push-notifications-server');

let beamsClient = new PushNotifications({
		instanceId: 'aec108c9-b429-42b1-85a8-d902ab81e61e',
		secretKey: '1C500B0D9438C0E830C45F1F9078E665DB1CDB6594B7721AF95D1D9582B037E4',
}); 

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
	console.log(ad.iBeacon.txPower); 

	// connect to Mongo - interface
	client.connect(err => {
		const collection = client.db("fyp-ble").collection("beacons");
		var dateCompare = moment(dateFormat(new Date(), "isoDateTime"));
		dateCompare.subtract(60, 'seconds');
		// perform actions on the collection object
		var myquery = { _address: ad.address, _lastFound: { $lt: isoDate(dateFormat(new Date(dateCompare), "isoDateTime")) } }; // current time minus 1 min(60 secs)
		var newvalues = { $set: { _lastFound: isoDate(dateFormat(new Date(), "isoDateTime")) } };
		//var option = { returnDocument: 'after' };
			collection.updateOne(myquery, newvalues, function(err, res) {
			console.log("Db successfully started");
				if (err) throw err;
				if (res.matchedCount > 0)
				{
					console.log("1 document updated");
				beamsClient
					.publishToInterests([ad.id], {
						fcm: {
							notification: {
								title: "Hello",
								body: "Your beacon has entered the scanner's range.",
							},
						},
					})
					.then((publishResponse) => {
						console.log("Just published:", publishResponse.publishId);
					})
					.catch((error) => {
						console.log("Error:", error);
					});
				}
				else
				{
					console.log("0 document updated");
				}
			});
		
	})
};



