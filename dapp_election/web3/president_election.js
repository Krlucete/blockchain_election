App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');    
    web3 = new Web3(App.web3Provider);
    return App.initPresidentContract();
  },

  // initStockHolderContract: function() {
  //   initWeb3();

  //   $.getJSON("stockholderElection.json", function(election) {
  //     App.contracts.stockholderElection = TruffleContract(election);
  //     App.contracts.stockholderElection.setProvider(App.web3Provider);
  //     return App.render();
  //   });
  // },

  initPresidentContract: function() {
    $.getJSON("presidentElection.json", function(election) {
      App.contracts.presidentElection = TruffleContract(election);
      App.contracts.presidentElection.setProvider(App.web3Provider);
      return App.render();
    });
  },
  
  

  // castVote: function(_vote, _voter) {
  // 	App.contracts.presidentElection.deployed().then(function(instance){
  // 		electionInstance = instance;
  // 		return electionInstance.castVote(_vote, _voter);
  // 	}).then(function(result){
  // 		console.log(_vote+"에게 투표완료했습니다.");
  // 	});
  // }

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

  test: function(name){
  	App.contracts.presidentElection.deployed().then(function(instance){
  		electionInstance = instance;
  		return electionInstance.test(name);
  	}).then(function(result){
  		console.log(name+"에게 투표완료했습니다.");
  	});
  },
  render: function() {
    App.startVote(5,2018,4,28,6,35,1);
    App.addCandidate("A");
    App.addCandidate("B");
    App.addCandidate("C");
  }
}

window.onload = function () {
	App.init();
}