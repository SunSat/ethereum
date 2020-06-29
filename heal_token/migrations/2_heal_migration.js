/*
const HealToken = artifacts.require("HealToken");

require('@openzeppelin/test-helpers/configure')({
  provider: 'http://localhost:7545',
  singletons: {
    abstraction: 'truffle',
  },
  web3
});


module.exports = async function(deployer) {
  let accounts = await web3.eth.getAccounts();
  console.log("The default accounts is :", accounts[0]);
  deployer.deploy(HealToken,100000,accounts);
};
*/
/*
const HealToken = artifacts.require("HealToken");

require('@openzeppelin/test-helpers/configure')({
  provider: 'http://localhost:7545',
  singletons: {
    abstraction: 'truffle',
  },
});

const {singletons} = require('@openzeppelin/test-helpers');

module.exports = async function (deployer, network, accounts) {
  let acc = await web3.eth.accounts[0];
  const erc1820 = await singletons.ERC1820Registry(acc);
  deployer.deploy(HealToken, 1000000000, acc);
};*/

/*const HealToken = artifacts.require("HealToken");

require('@openzeppelin/test-helpers/configure')({
  provider: 'http://127.0.0.1:7545',
  singletons: {
    abstraction: 'web3',
    defaultGas: 6e6,
    defaultSender: '0x08e9073135ce582C061c8d1b1Ec95038a31D6172',
  },
});

const { singletons } = require('@openzeppelin/test-helpers');
const {web3} = require('@openzeppelin/test-helpers');

module.exports = async function (deployer, network, accounts) {

  console.log("Default account ", network);

  if (network === 'development')  {
    // In a test environment an ERC777 token requires deploying an ERC1820 registry
    await singletons.ERC1820Registry(accounts[0]);
  }

  await deployer.deploy(HealToken, 4881174811, []);
  const token = await HealToken.deployed();
  console.log("Token address:", token.address);

};*/

/*
const HealToken = artifacts.require("HealToken");
const HealTokenSale = artifacts.require("HealTokenSale");

module.exports = async function(deployer) {
    let address = await web3.eth.getAccounts();
    await deployer.deploy(HealToken, 1000000000000, []);
    console.log('==============Deployed Successfully. -------------------')
    var d1 = new Date();
    let startTime = parseInt(d1.getTime()/1000);
    let endTime = startTime + 100000;
    await deployer.deploy(HealTokenSale,1, address[0], HealToken.address, startTime, endTime );
    console.log('--------------Deployed Successfully. -------------------')
    let tokenInstance = await HealToken.deployed();
    await tokenInstance.transfer(HealTokenSale.address, 30000000000);
};

*/


const HealToken = artifacts.require("HealToken");
module.exports = async function(deployer) {
    deployer.deploy(HealToken, "Health", "HEAL", 10000000000 * (10 ** 5), 1000000000 * (10 ** 5),);
}