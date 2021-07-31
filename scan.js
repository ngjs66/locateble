// declare library
var bleacon = require('bleacon');

// start scanner
bleacon.startScanning(); // scan for any bleacons or can be replaced with uuid, major, minor, rssi to scan for specific beacons

// event to happen upon discover of beacon
bleacon.on('discover', function(bleacon) {
	// declare variables
	var uuid = '';
	var major = 0;
	var minor = 0;
	var measuredPower = -59;
});
