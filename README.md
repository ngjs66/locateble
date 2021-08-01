# locateble

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=for-the-badge)](#all-contributors-emoji-key)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

[![Node](https://img.shields.io/badge/Node-16+-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![npm](https://img.shields.io/badge/npm-7+-339933?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/npm)

## Requirements (Hardware)
- Raspberry Pi 3
- Bluetooth Low Energy (BLE) beacons configured in iBeacons data format

## Requirements (Software)
- NodeJS v16+


## Installation guide

### 1. Check for latest distro on RasPi:
- Tested on Raspbian GNU/Linux 9 a.k.a stretch
- To check current distro: ``` cat /etc/os-release ```

 
### 2. Install latest version of node/nodejs/npm: 
To remove and install latest [node/nodejs/npm](https://medium.com/@thedyslexiccoder/how-to-update-nodejs-npm-on-a-raspberry-pi-4-da75cad4148c).
> NOTE: node and npm might be the latest however nodejs isn't. To match node and nodejs refer to [this](https://thisdavej.com/upgrading-to-more-recent-versions-of-node-js-on-the-raspberry-pi/).

### 3. Install node library Bleacon:
