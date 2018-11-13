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
integrated with 3rd party wallets (as mentioned above).

__Note__: We refer often to the term "Token Burning" which simply means the transfer of ERC20 tokens from ethereum
blockchain to the æternity main net.

## A brief explanation of the token transfer process.

To transfer tokens it is necessary to have enough ETH to pay for gas and transaction fees. Tokens can be transferred
in unlimited multiple batches. When a user transfers his/her tokens, first they specify the number, 2nd they connect
their wallet to sign the transaction. In the 3rd step the contract burner contract (see below) a solidity smart contract 
is invoked which receives and prepares the tokens for their availability on the æternity main net. 

## Tools that users can use in each step

1. Creating an address: There are a few different ways to create an æternity account 
   - 1.1 The Base App: This is also our æternity wallet allowing you to create your æternity address & view the balance of your tokens transferred thus far.
    * __url__: https://base.aepps.com
    * __Source__: https://github.com/aeternity/aepp-base
   - 1.2 Airgap Vault: very secure for storing your key pair and works best with a second offline mobile device.
    * __URL__: https://airgap.it/
    * __Note__: Integration developed but not supported at the time of writing.
   - 1.3 Ledger Wallet: Hardware wallet that is simple and convenient.
    *__Note__: Integration developed but not supported at the time of writing
   - 1.4 Metamask: A web3 chrome plugin that allows you to generate your account.
   - 1.5 Command Line CLI: The javascript sdk, go sdk and python sdk all have a common language interface currently in test at the time of writing. 

1. Beginning token migration: 
   
   - 2.1 From intro website: This is the home page that token owners can got to, to begin their token migration. From here users are redirected to this web app (see 2.2)

    * __Url__: https://migrate.aeternity.com/#/
    * __Source__: https://github.com/aeternity/aepp-token-migration-landing
  
    - 2.2 Direct to the Progressive web app: 
    * __Url__: https://token-migration.aepps.com/
    * __Source__: here

    - 2.3 Command line cli: in development
   
2. Transaction verification. During the token migration process, we generate the payload data in preparation for a transaction signature. The Payload verification tool is useful for decoding & verifying the migration data prior to approving your transaction.
    * __url__: https://verify-data.aeternity.com/
    * __source__: https://github.com/aeternity/aepp-token-migration-payload
  
3. Signing transactions: To facilitate the token migration process we use web3 wallets and other tools. When using the web app journey to migrate tokens users have a few supported wallets to sign their transactions
   
    - 4.1 My Ether Wallet: a web app wallet for signing transactions. Note: do not change the ETH amount on this screen at the migratio stage.  
    - 4.2 MetaMask: Web3 chrome plugin for signing token transfer transactions during then migration process.
    - 4.3 Ledger Wallet: A hardware wallte with integration currently developed but not supported at the time of writing.

4. Token Burn Contract: This is the solidity code that runs on the ethereum virtual machine (EVM),
it is invoked every time a user transfers their ae token(s) to æternity main net.
    * __source__: https://github.com/aeternity/ae-token-migration-contract

6.  Events capturing: 
- 6.1 The Token burner listener is a Node js script that listens to events of tokens burnt (transferred), it captures these events and logs them in BackendLess allowing easy report of balances transferred by an account thus far. This is merely for reporting and can be validated by interrogating the token burner contract or simply viewing events on etherscan.
    * __source__: https://github.com/aeternity/token-burn-listener

- 6.2 Backendless: for reporting to the user their migration events with ease. Our token migration progress web app including the base app use backendless to show migrated token history and balance to date. This is only for reporting & user journey purposes. Balance generation on æternity main net does not use backendless.
    * __Url__ https://backendless.com/
     
7. Initial Balance generation. Once the window to transfer the tokens has closed. The tokens are then at a known date made available on the æternity main net. The Initial AE Balance Generator is used to generate account balances per account on the æternity blockchain. It is run when the node boots up.
    * __source__: https://github.com/aeternity/initial-ae-balances-generator

## Running Migration Locally

As mentioned above, you may wish to run the migration process completely or partially locally.
To run this process completely locally you can download all projects from our open git 
repository, setup your own backendless account & endpoint then run all 3 (this project),
the base app, the token burner listener all mentioned above.

[https://nodejs.org/en/download/]: https://nodejs.org/en/download/
