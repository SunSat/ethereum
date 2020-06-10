const AniSat = artifacts.require("AniSat");

module.exports = function(deployer) {
  deployer.deploy(AniSat, 1000);
};
