var presidentElection = artifacts.require("./presidentElection.sol");
var stockholderElection = artifacts.require("./stockholderElection.sol");
var hashDB = artifacts.require("./hashDB.sol");
var dateTime = artifacts.require("./dateTime.sol");

module.exports = function(deployer) {
  deployer.deploy(presidentElection,{gas: 6721975});
  deployer.deploy(stockholderElection,{gas: 6721975});
  deployer.deploy(hashDB,{gas: 6721975});
  deployer.deploy(dateTime,{gas: 6721975});
};

