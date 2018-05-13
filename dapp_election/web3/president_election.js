App = {
  web3Provider: null,
  contracts: {},
  account: 'null',
  winner : null,

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    App.web3Provider = new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545');    
    web3 = new Web3(App.web3Provider);

    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        console.log(App.account);
      }
    });

    return App.initPresidentContract();
  },

  initPresidentContract: function() {
    $.getJSON("presidentElection.json", function(election) {
      App.contracts.presidentElection = TruffleContract(election);
      App.contracts.presidentElection.setProvider(App.web3Provider);
      return App.render();
    });
  },


  startVote: function(_maxVoteCount, _year, _month, _day, _hour, _minute, _endHour){
    App.contracts.presidentElection.deployed().then(function(instance){
      electionInstance = instance;
      return electionInstance.startVote(_maxVoteCount, _year, _month, _day, _hour, _minute, _endHour);
    }).then(function(result){
      console.log("startVote");
    });
  },

  addCandidate: function(_name){
    App.contracts.presidentElection.deployed().then(function(instance){
      electionInstance = instance;
      return electionInstance.addCandidate(_name);
    }).then(function(result){
      console.log("addcandidate");
    });
  },

 countVotes: function(){
    App.contracts.presidentElection.deployed().then(function(instance){
      electionInstance = instance;
      return electionInstance.countVotes();
    }).then(function(result){
        console.log("countVotes");

    });
  },

  getWinner: function(){
    App.contracts.presidentElection.deployed().then(function(instance){
      electionInstance = instance;
      return electionInstance.getWinner();
    }).then(function(result){
      console.log("getWinner");
      console.log(result);

    });
  },

  castVote: function(_vote, _voter){
    App.contracts.presidentElection.deployed().then(function(instance){
      electionInstance = instance;
      return electionInstance.castVote(_vote, _voter);
    }).then(function(result){
      console.log("castVote");
       App.getCoinbaseBalance();
       

    });
  },

  getTieWinner: function(){
    App.contracts.presidentElection.deployed().then(function(instance){
      electionInstance = instance;
      return electionInstance.getTieWinner();
    }).then(
      function(result){
      console.log("getTieWinner");
    });
  },

  

  test: function(){
    App.contracts.presidentElection.deployed()
    .then(
      function(instance){
      testInstance = instance;
      return testInstance.test.call();
      }
    )
    .then(
      function(value){
      console.log("success");
      console.log(value);
    }
    );
  },

  getCoinbaseBalance: function(){
     web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        balance = web3.eth.getBalance(account);
        console.log(balance);
      }
    });
  },

  render: function() {

    App.startVote(5,2018,5,13,10,31,5);

    App.addCandidate("A");
    App.addCandidate("B");

    App.countVotes();
  }
}

window.onload = function () {
	App.init();
}