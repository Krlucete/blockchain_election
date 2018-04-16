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
  
  render: function() {
        
  },

  castVote: function() {

      console.log("hello");  
  }
}

window.onload = function () {
	App.init();
	// App.castVote();
}