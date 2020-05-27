Solidity Development: How to Set Up a Private Ethereum Blockchain in 5 mins

How to Setup private Ethereum network, writing smart contract, compile, deploy and access smart contract from web.

I have used Mac for entire process. Irrespective operating system the process is same only path may differ.
Language & Tools We are going to use :
    Language : Go-Ethereum(Geth-1.9.14), Javascript, Html
    Tools : RemixIDE, Truffle, Ganache
    Operations : Development, Compile, Test, Deployment & Access of     Smart Contract from private Ehterum blockchain.
    
    
    The entire process comprise following 5 steps
        1. Download, Install & Start private Ethereum blockchain using Geth CLIs.
        2. Download & Install, Truffle & Ganache 
        3. Writing Smart Contract
        4. Compile, Test & Deployment using Truffle & Ganache
        5. Invoke smart contract from web browser using JavaScript

Solidity Development: Private Ethereum network & dev environment(Remix, Truffle, Ganache) setup, writing smart contract, compile, test, deployment, access from web browser

I have used Mac for entire process. Irrespective operating system the process is same only path may differ.

Language & Tools We are going to use :
    Language : Go-Ethereum(Geth-1.9.14), Javascript, Html
    Tools : RemixIDE, Truffle, Ganache
    Operations : Development, Compile, Test, Deployment & Access of Smart Contract 
        from private Ehterum blockchain.

The entire process comprise 5 steps
    1. Download, Install & Start private Ethereum blockchain using Geth CLIs.
    2. Download & Install, Truffle & Ganache 
    3. Writing Smart Contract
    4. Compile, Test & Deployment using Truffle & Ganache
    5. Invoke smart contract from web browser using JavaSctipt

Step 1 : Download, Install & Start private Ethereum blockchain using Geth CLIs.
    1.1 : Download & Install Geth as mentioned in go-ethereum wiki :
        Using Homebrew : https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Mac
        Or
        Using tar.gz : https://geth.ethereum.org/downloads/
        a) Download Geth & Tools.tar.gz and unzip it.
        b) mention the path in .base_profile available under your name(vi ~/.base_profile). 
        GOPATH = /Users/myusername/Desktop/geth-install/geth-alltools-darwin-amd64-1.9.14-6d74d1e5
        PATH="${PATH}:${GOPATH}"
        Restart/Open new Terminal.
    1.2 : Initiate & Start a new private network with genesis.json
        a) create a new folder called "eth_private_network"
        b) create a new file called "genesis.json" inside "eth_private_network" as mentioned in the wiki.
            https://github.com/ethereum/go-ethereum/wiki/Private-network
        c) Copy below sample code to genesis.json file
        {
            "alloc": {},
            "config": {
                "chainId": 2022,
                "homesteadBlock": 0,
                "DAOForkBlock": 0,
                "DAOForkSupport": true,
                "eip150Block": 0,
                "eip155Block": 0,
                "eip158Block": 0
            },
            "difficulty": "0x400",
            "gasLimit": "0x989680",
            "nonce": "0x0000000000000042",
            "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
            "coinbase": "0x0000000000000000000000000000000000000000",
            "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
            "extraData": "",
            "timestamp": "0x00"
        }
        
        d)cd eth_private_network
        >  geth --datadir ./datadir init ./genesis.json 
        This command initiate new private network with id 2022 and create a new folder called datadir which intern has keystore and geth folders
        
        e) geth --datadir ./datadir --networkid 2022 --rpc --rpcport 30303 --allow-insecure-unlock console 2>> ./tmp.log
        This command will start new private ethereum blockchain with modules enabled "modules: admin:1.0 debug:1.0 eth:1.0 ethash:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0"
        Note : you can enable modules using get '{interface}api' ex: geth --ipcapi admin,eth,miner --rpcapi eth,web3 --rpc
        https://github.com/ethereum/go-ethereum/wiki/Management-APIs
        
        d) create 2 new accounts in geth console using personal api.
         > personal.newAccount('sample1');
         > personal.newAccount('sample2');
        
        c) In a private network as admin you can provide default ethers using alloc property in genesis.json or using eth awards using miners.
        > miner.start()
        
        d) After sometime you can find many empty blocks has mined because the default new block creation time ~14sec.
        > web3.fromWei(eth.getBalance(eth.coinbase))
        
        e) You can find total number block mined in your network 
        > eth.blockNumber
        
        f) You can find account address using following commands
        > eth.accounts OR > personal.listAccounts  
        ["0xd857b288ec2053953754cdacf066ae84dbd614b6", "0x733728a8f0defb04eca237f2121fab20a09490eb"]
        
        g) Unlock Accounts using password before sending the Ethers.
        > personal.unlockAccount('0xd857b288ec2053953754cdacf066ae84dbd614b6','sample1',0)
        
        h) You can send mined ethers from one account to another accounts.
        > eth.sendTransaction({from:'0xd857b288ec2053953754cdacf066ae84dbd614b6',to:'0x733728a8f0defb04eca237f2121fab20a09490eb',value:web3.toWei('1','ether')})
        
        i) In my next blog you can find How multiple nodes can join in the same networkid?
        
Step 2. Download & Install, Truffle & Ganache
    
    2.1: Download & Install Truffle
        
        a) Truffle can be install using NPM (Node Package Manager). In new Terminal 
        npm install -g truffle
        you can find full details in https://www.trufflesuite.com/docs/truffle/overview 
        
        b) Create a folder called "calculator" 
        cd calculator
        truffle init
        
        This will generate required folders and Migration.sol & Script files.
        
    2.2: Download & Install Ganache
    
        a) Ganache is GUI tool for Compile, Test & Deploy smart contract on Ethereum Blockchain.
        Download Ganache from https://www.trufflesuite.com/ganache
        
        b) Install Ganache. Open Ganache GUI, Create a new workspace with name calculator.

Till now Private Network is up & running, Dev environment is ready to develop smart contract.

Step 3. Writing Smart Contract
    
    3.1 Using Remix IDE :  
        
        a) In a browser open https://remix.ethereum.org/ this will open new IDE with some sample files.
        b) Open plugin Manger isntall SOLIDITY COMPILER & DEPLOY & RUN TRANSACTIONS plugins
        c) Create a new file called "calculator.sol". Copy below snipet of code to calculator.sol
        
        pragma solidity >=0.4.16 <0.7.0;
        contract Calculator {
        
          uint result;
        
          constructor() public {
            result = 10;
          }
        
          function getResult() public view returns (uint){
            return result;
          }
        
          function addToNumber(uint num1,uint num2) public returns (uint) {
            result = num1 + num2;
            return result;
          }
        
          function substractFromNumber(uint num1, uint num2) public returns (uint) {
            result = num1 - num2;
            return result;
          }
        }
        
        d) Compile & Deploy using the plugins
        e) Invoke all the methods after deploy in Remit IDE and test it.
        To learn more about solidity : https://solidity.readthedocs.io/en/v0.5.3/index.html#
    
    3.2 : Smart Contract Development using Truffle
        
        a) In Senction 2.1 You already executed truffle init and it created all the required folders. Using VSCode Or any IDE you can open the folder.
        b) Under Contract folder -> Create a new file called "calculator.sol" 
        c) Copy and paste the code we have written in Remix IDE(calculator.sol)
        d) Under Migration folder -> create a new file called "2_calcualtor_migration.js"
        e) copy the below code snipet into 2_calculator_migration.js file
        
            const Calculator = artifacts.require("Calculator");
            
            module.exports = function(deployer) {
              deployer.deploy(Calculator);
            };

Step 4. Compile, Test & Deploy of Smart Contract using Truffle & Ganache.

    4.1 : Compile, Test & Deploy using Truffle.
    
        a) Once you copied calculator.sol file  in a new terminal run below cmd. This will compile new calculator.sol file.
        > truffle compile
        
        b) Update truffle-config.js file to deploy and run smart contracts.
        uncomment below lines and change the port and network_id
        
            development: {
              host: "127.0.0.1",     
              port: 30303 ,            
              network_id: "2022",       
            },
                        
        c) run truffle migrate command(unlock account before deploy new smart contract).
        > truffle migrate
        
        d) once compiled and migrate then we can test with below command.
        > truffle console
        
        e) In console
        > let cal = await Calculator.deployed()
        > cal.addToNumber(12,12)
        you will get the result.
    
    4.1 : Compile, Test & Deploy using Ganache.
        
        a) In truffle-config.js file add below lines for ganache deployment after development property.
        
        ganache: {
           host: "127.0.0.1",     
           port: 7545,            
           network_id: "2022"       
        },
        
        a) Open Ganache whcih you have downloaded and installed.
        b) create a new workspace, hit add project and select truffle-config.js    
        e) and choose network id 2022 and leave all other setting to default
        f) Hit save workspace which open up the default accounts details.
        g) Goto Contract page it says contract not deployed.
        
        Deploying Contract
        
        h) Open new Terminal and cd truffle-cofig.js folder and type below command 
        > truffle migrage --network ganache 
        i) which will deploy the calculator contract into Ganache private network
        > truffle console --network ganache
        > let cal = await Calculator.deployed()
        > cal.addToNumber(12,12)
        you will get the result.
    
5. Invoke smart contract from web browser using JavaSctipt
    
        5.1 : Setup Express Node application to communicate with your Private Blockchian
        
        a) cd calculator
        b) npx express-generator
        c) npm install
        d) DEBUG=calculator:* npm start
        e) In the browser opeb http://localhost:3000/
        
        Enable automatic restart
        
        h) npm install --save-dev nodemon
        edit your package.json file and below lines.
        "scripts": {
            "start": "node ./bin/www",
            "devstart": "nodemon ./bin/www"
          },

        i) npm install web3 --save
        

       
         
         
         
                