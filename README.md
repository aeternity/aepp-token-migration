# aepp-token-migration

[![Build Status](https://ci.aepps.com/job/aepp-token-migration/badge/icon)](https://ci.aepps.com/job/aepp-token-migration/)

This is the repository for æpp Token Migration which is an application to help facilitate token migration for
the æternity blockchain, from ERC20 tokens to æternity blockchain main net.

The tool works by connecting with a 3rd party wallet, in current case we support MetaMask, MyEtherWallet and Ledger
Wallet.

The tool is hosted in one of the æternity servers, but its not bound to it, this tool can also be downloaded and run
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

## Token migration further explained

Alongside the token migration app (source here and also available on https://token-migration.aepps.com/) 
we have built a host of additional tools which give the user a smooth migration journey as well as 
integrating with 3rd party wallets (as mentioned above).

__Note__: We refer often to the term "Token Burning" which simply means the transfer of ERC20 tokens from ethereum
blockchain to the æternity main net.

## A brief explanation of the token transfer process.

To transfer tokens it is necessary to have enough ETH to pay for gas and transaction fees. Tokens can be transferred
in unlimited multiple batches. When a user transfers his/her tokens, first they specify the number, 2nd they connect
their wallet to sign the transaction. In the 3rd step the contract burner contract (see below) a solidity smart contract 
is invoked which receives and prepares the tokens for their availability on the æternity main net.

## Tools (We built and use)

1. Token migration landing page: This is the home page that token owners got to, to begin their token migration.
  - __Url__: https://migrate.aeternity.com/#/
  - __Source__: https://github.com/aeternity/aepp-token-migration-landing
2. The base app: This is also our æternity wallet allowing you to create your æternity address & view the balance of 
your tokens transferred thus far.
  - __url__: https://base.aepps.com
  - __Source__: https://github.com/aeternity/aepp-base
3. Payload verification tool: Useful for decoding & verifying the migration data prior to approving your transaction.
  - __url__: https://verify-data.aeternity.com/
  - __source__: https://github.com/aeternity/aepp-token-migration-payload
4. Token Burner Listener: This is a Node js script that listens to events of tokens burnt (transferred),
it captures these events and logs them in BackendLess allowing easy report of balances burnt/transferred by 
account thus far. This is merely for reporting and can be validated by interrogating the token burner contract
or simply viewing events on etherscan.
  - __source__: https://github.com/aeternity/token-burn-listener
4. Token Burn Contract: This is the solidity code that runs on the ethereum virtual machine (EVM),
it is invoked every time a user transfers their ae token(s) to æternity main net.
  - __source__: https://github.com/aeternity/ae-token-migration-contract
5. Initial AE Balance Generator: Used to generate account balances per account on the æternity blockchain. It is run 
when the node boots up.
  - __source__: https://github.com/aeternity/initial-ae-balances-generator

## 3rd Party tools (we also use).

To facilitate the token migration process we use web3 wallets and other tools.

1. Airgap Vault: useful for creating an æternity address & securely storing your key pair.
  - __URL__: https://airgap.it/
  - __Note__: Integration developed but not supported at the time of writing.
2. Ledger Wallet: Hardware wallet for creating your æternity account & storing your key pair.
  - __Note__: Integration developed but not supported at the time of writing
3. My Ether Wallet: Used for signing token transfer transactions during then migration process. 
4. MetaMask: Web3 chrome plugin for signing token transfer transactions during then migration process.
5. Backendless: for reporting to the user their migration events with ease.

## Running Migration Locally

As mentioned above, you may wish to run the migration process completely or partially locally.
To run this process completely locally you can download all projects from our open git 
repository, setup your own backendless account & endpoint then run all 3 (this project),
the base app, the token burner listener all mentioned above.

[https://nodejs.org/en/download/]: https://nodejs.org/en/download/
