# ethereum

Go-Ethereum - Geth
RemixIde - Online Ethereum development enviornment but its Mock in Java Virtual Machine 
Truffle - Local Development enviornment. Which can be connected EVM through Geth.
mocha - Test Network for Ethereum. 

Below you can find EVM Architecture.
https://hackernoon.com/getting-deep-into-evm-how-ethereum-works-backstage-ac7efa1f0015

Remix - IDE
https://remix.ethereum.org/#optimize=true&evmVersion=null&version=soljson-v0.6.8+commit.0bbfe453.js

Truffle - IDE


Initiate the network with genesis.json file.
 geth --datadir ./datadir init ./genesis.json
 
 After successful initiation start the network
 geth --datadir ./datadir --networkid 2019 console

 This tell all the available modules :
  modules: admin:1.0 debug:1.0 eth:1.0 ethash:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

The console command will give you the console this is known as IPC console. this will enable all the modules by deafult.

Using {interface}api we can enable or disable modules.

like

geth --ipcapi admin,eth,miner --rpcapi eth,web3 --rpc

----
New Account : Once get started we need to create a new account using 
personal.newAccount('password');

This will create new account and act as etherbase. All the rewards will go into thi address.

------

geth --datadir=./datadir --networkid=2019 --rpc --rpcport 30303 --allow-insecure-unlock console
personal.listAccounts
eth.accounts
personal.unlockAccount('address','password',0)

----

application Binary interface -> truffle compile 