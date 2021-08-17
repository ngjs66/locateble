// declare library
var BeaconScanner = require('node-beacon-scanner')
var scanner = new BeaconScanner();

// set an Event handler for beacons 
scanner.onadvertisement = (ad) => {
	// log MAC address of beacons 
	console.log(ad.address);
};

// start scanning 
scanner.startScan().then(() => {
	console.log('Started to scan');
}).catch((error) => {
	console.log(error);
});
	
