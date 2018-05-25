hashDB = {
  web3Provider: null,
  contracts: {},
  coinbase: 'null',

  init: function() {
    return hashDB.initWeb3();
  },

  initWeb3: function() {
    hashDB.web3Provider = new Web3.providers.HttpProvider('HTTP://127.0.0.1:7545');    
    web3 = new Web3(hashDB.web3Provider);
    web3.eth.getCoinbase(function(err, coinbase) {
      if (err === null) {
        hashDB.coinbase = coinbase;
      }
    });
    return hashDB.inithashDB();
  },

  inithashDB: function() {
    $.getJSON("hashDB.json", function(election) {
      hashDB.contracts.hashDB = TruffleContract(election);
      hashDB.contracts.hashDB.setProvider(hashDB.web3Provider);
      return hashDB.render();
    });
  },

  setStartTime: function(_year, _month, _day, _hour, _minute){
    App.contracts.hashDB.deployed().then(function(instance){
      hashdbInstance = instance;
      return hashdbInstance.setStartTime(_year, _month, _day, _hour, _minute, {from: App.coinbase});
    }).then(function(result){
      console.log(result);
      console.log("setStartTime");
    }).catch(function(e){
      console.log(e);
      console.log("e_setStartTime");
    });
  },


  setHashDB: function(_hashDB){
    App.contracts.hashDB.deployed().then(function(instance){
      hashdbInstance = instance;
      return hashdbInstance.setHashDB(_hashDB, {from: App.coinbase});
    }).then(function(result){
      console.log(result);
      console.log("setHashDB");
    }).catch(function(e){
      console.log(e);
      console.log("e_setHashDB");
    });
  },

  returnHashDB: function(_hashDB){
    App.contracts.hashDB.deployed().then(function(instance){
      hashdbInstance = instance;
      return hashdbInstance.returnHashDB(_hashDB, {from: App.coinbase});
    }).then(function(result){
      console.log(result);
      console.log("returnHashDB");
    }).catch(function(e){
      console.log(e);
      console.log("e_returnHashDB");
    });
  },

  controlHashDB: function(_hashDB){
    App.contracts.hashDB.deployed().then(function(instance){
      hashdbInstance = instance;
      return hashdbInstance.controlHashDB(_hashDB, {from: App.coinbase});
    }).then(function(result){
      console.log(result);
      console.log("controlHashDB");
    }).catch(function(e){
      console.log(e);
      console.log("e_controlHashDB");
    });
  },

  render: function() {
  }
}

window.onload = function () {
	hashDB.init();
}
