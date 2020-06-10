const HealToken = artifacts.require("HealToken");

module.exports = function(deployer) {
  deployer.deploy(HealToken);
};
