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
    return App.initStockHolderElection();
  },

  initStockHolderElection: function() {
    $.getJSON("stockholderElection.json", function(election) {
      App.contracts.stockholderElection = TruffleContract(election);
      App.contracts.stockholderElection.setProvider(App.web3Provider);
      return App.render();
    });
  },


  render: function() {
  }
}

window.onload = function () {
	App.init();
}
