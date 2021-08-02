// declare library
var BeaconScanner = require('node-beacon-scanner')
var scanner = new BeaconScanner();

// set an Event handler for beacons 
scanner.onadvertisement = (ad) => {
	console.log(JSON.stringify(ad, null, ''));
};

// start scanning 
scanner.startScan().then(() => {
	console.log('Started to scan');
}).catch((error) => {
	console.log(error);
});
	
