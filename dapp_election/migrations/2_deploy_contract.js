var presidentElection = artifacts.require("./presidentElection.sol");
var stockholderElection = artifacts.require("./stockholderElection.sol");

module.exports = function(deployer) {
  deployer.deploy(presidentElection);
  deployer.deploy(stockholderElection);
};