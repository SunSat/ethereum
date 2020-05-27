var Web3 = require('web3');
var Eth = require('web3-eth');
//var Accounts = require('web3-eth-accounts');
var json = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "adopters",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "petId",
          "type": "uint256"
        }
      ],
      "name": "adopt",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAdopters",
      "outputs": [
        {
          "internalType": "address[16]",
          "name": "",
          "type": "address[16]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ]
//var web3 = new Web3("http://127.0.0.1:8545");
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//console.log(web3.version);
console.log("--------------------------------------------------------")
var eth = new Eth(web3.currentProvider);
var contract = new web3.eth.Contract(json,'0xa1DCd6119528b5865065Fe0a48644d9C3EDDF509');
web3.eth.defaultAccount = '0xa1DCd6119528b5865065Fe0a48644d9C3EDDF509';
var transaObj = {
    from: '0xa1DCd6119528b5865065Fe0a48644d9C3EDDF509',
    to: '0xcC339002F90D19608271AbF2EdD5D43831C488A1',
    value: '10000000'
}


var version = web3.version.api;

//console.log(web3.currentProvider);

//console.log(web3.eth.defaultAccount);
web3.eth.getBalance(web3.eth.defaultAccount).then((result) => {
    //console.log(web3.utils.fromWei(result,"ether"));
});


//console.log(web3.utils.fromWei(bala));

//console.log(contract);
//var result =  contract.adopt(12);
//console.log(result);
var MyContract = new web3.eth.Contract(json);
//console.log(MyContract);
var contractInstance = MyContract.at('0xa1DCd6119528b5865065Fe0a48644d9C3EDDF509');
console.log(contractInstance);