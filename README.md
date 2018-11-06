# aepp-token-migration

[![Build Status](https://ci.aepps.com/job/aepp-token-migration/badge/icon)](https://ci.aepps.com/job/aepp-token-migration/)

This is the repository for Aepp Token Migration which is an application to help facilitate token migration for
the Aeternity blockchain, from ERC20 tokens to Aeternity blockchain mainnet.

The tool works by connecting with a 3rd party wallet, in current case we support MetaMask, MyEtherWallet and Ledger
Wallet.

The tool is hosted in one of the Aeternity servers, but its not bound to it, this tool can also be downloaded and run
locally, below you'll find the steps needed to install / run the application.

## Requirements

- NodeJs > 8.0.0
- NPM / Yarn

Node can be installed from: [https://nodejs.org/en/download/][https://nodejs.org/en/download/] 

## Project setup
By running this command, you're going to install several npm packages, and build the environment for the
application.
```
npm install
```

### Compiles and hot-reloads for development
This command will run a server instance of the application locally so you can be able to access it locally.
```
npm run serve
```

### Compiles and minifies for production
Bundles the application for production use (in case you want to deploy on a server)
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```


[https://nodejs.org/en/download/]: https://nodejs.org/en/download/
