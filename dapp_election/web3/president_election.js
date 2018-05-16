App = {
  web3Provider: null,
  contracts: {},
  coinbase: 'null',

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    App.web3Provider = new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545');    
    web3 = new Web3(App.web3Provider);
    web3.eth.getCoinbase(function(err, coinbase) {
      if (err === null) {
        App.coinbase = coinbase;
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

  //using contract
  startVote: function(_maxVoteCount, _year, _month, _day, _hour, _minute, _endHour){
    App.contracts.presidentElection.deployed().then(function(instance){
      electionInstance = instance;
      return electionInstance.startVote(_maxVoteCount, _year, _month, _day, _hour, _minute, _endHour, {from: App.coinbase});
    }).then(function(result){
      console.log("startVote");
    }).catch(function(e){
      console.log("e_startVote");
    });
  },

  addCandidate: function(_name){
    App.contracts.presidentElection.deployed().then(function(instance){
      electionInstance = instance;
      return electionInstance.addCandidate(_name, {from: App.coinbase});
    }).then(function(result){
      console.log("addCandidate");
    }).catch(function(e){
      console.log("e_addCandidate");
    });
  },

 countVotes: function(){
    App.contracts.presidentElection.deployed().then(function(instance){
      electionInstance = instance;
      return electionInstance.countVotes({from: App.coinbase});
    }).then(function(result){
        console.log("countVotes");
    }).catch(function(e){
      console.log("e_countVotes");
    });
  },

  getWinner: function(){
    App.contracts.presidentElection.deployed().then(function(instance){
      electionInstance = instance;
      return electionInstance.getWinner({from: App.coinbase});
    }).then(function(result){
      console.log("getWinner");
    }).catch(function(e){
      console.log("e_getWinner");
    });
  },

  castVote: function(_vote){
    App.contracts.presidentElection.deployed().then(function(instance){
      electionInstance = instance;
      return electionInstance.castVote(_vote, {from: App.coinbase});
    }).then(function(result){
      console.log("castVote");
    }).catch(function(e){
      console.log("e_castVote");
    });
  },

  getTieWinner: function(){
    App.contracts.presidentElection.deployed().then(function(instance){
      electionInstance = instance;
      return electionInstance.getTieWinner({from: App.coinbase});
    }).then(function(result){
      console.log("getTieWinner");
    }).catch(function(e){
      console.log("e_getTieWinner");
    });
  },

  test: function(){
    App.contracts.presidentElection.deployed().then(function(instance){
      testInstance = instance;
      return testInstance.test.call({from: App.coinbase});
    }).then(function(value){
      console.log("test");
      console.log(value.c[0]);
    }).catch(function(e){
      console.log("e_test");
    });
  },

  //using web3

  render: function() {
    App.startVote(5,2018,5,16,11,20,1);
    App.addCandidate("A");
    App.addCandidate("B");
    App.test();
  }
}

window.onload = function () {
	App.init();
}