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

  castVote: function(voter,location){
    document.getElementById("vote").disabled = true;
    document.getElementById("vote2").disabled = true;
    App.contracts.presidentElection.deployed().then(function(instance){
      electionInstance = instance;
      return electionInstance.castVote(voter, location, {from: App.coinbase});
    }).then(function(result){
      location.href = '/vote_success';
      console.log("castVote");
      console.log(result);
    }).catch(function(e){
      console.log(e);
      console.log("e_castVote");
    });
  },

  render: function() {
  }
}

window.onload = function () {
	App.init();
}
