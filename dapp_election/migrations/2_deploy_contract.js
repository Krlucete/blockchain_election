var presidentElection = artifacts.require("./presidentElection.sol");
var stockholderElection = artifacts.require("./stockholderElection.sol");
var dateTime = artifacts.require("./dateTime.sol");

module.exports = function(deployer) {
  deployer.deploy(presidentElection);
  deployer.deploy(stockholderElection);
  deployer.deploy(dateTime);
};
