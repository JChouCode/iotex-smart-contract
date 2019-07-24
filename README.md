# iotex-smart-contract

Deploying a solidity smart contract on iotex using Nodejs/antenna sdk. This repository contains node scripts for compiling and deploying a simple solidity smart contract on the IoTeX Mainnet blockchain.

## Creating a smart contract

Modify `contracts/contract.sol` with the smart contract you want to deploy

## Compiling

Execute the following command
```
$ truffle compile
```

## Deploy to MainNet

Enter abi, bytecode and execute the following command
```
$ node deploy.js
```
