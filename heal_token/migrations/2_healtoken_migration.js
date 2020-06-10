const HealToken = artifacts.require("HealToken");
const HealTokenSale = artifacts.require("HealTokenSale");

module.exports = function(deployer) {
  deployer.deploy(HealToken,10000000000,"Health","HEAL").then(function(result) {
      deployer.deploy(HealTokenSale,HealToken.address,1000000);  
  });
};
