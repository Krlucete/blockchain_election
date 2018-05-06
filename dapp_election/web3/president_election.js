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


  castVote: function(_vote, _voter){
    App.contracts.presidentElection.deployed().then(function(instance){
      electionInstance = instance;
      return electionInstance.castVote(_vote, _voter);
    }).then(function(result){
      console.log("castVote");

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
    });
  },

  getTieWinner: function(){
    App.contracts.presidentElection.deployed().then(function(instance){
      electionInstance = instance;
      winner=electionInstance.getTieWinner();
      return electionInstance.getTieWinner();
    }).then(function(result){
      console.log(winner);
      console.log("getTieWinner");
    });
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
    App.startVote(5,2018,4,29,19,14,5);

    var accounts = web3.eth.accounts;
    console.log(accounts);

    App.addCandidate("A");
    App.addCandidate("B");
    App.addCandidate("C");

    App.countVotes();
    App.getTieWinner();
  }
}

window.onload = function () {
	App.init();
}