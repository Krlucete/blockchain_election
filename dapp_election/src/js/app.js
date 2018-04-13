App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
            console.log("initWeb3");

    var Web3 = require('web3');
    App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');    
    web3 = new Web3(App.web3Provider);
    return App.initContract();
  },

  initContract: function() {
        console.log("initContract");

    $.getJSON("presidentElection.json", function(election) {
      App.contracts.presidentElection = TruffleContract(election);
      App.contracts.presidentElection.setProvider(App.web3Provider);
      return App.render();
    });
  },
  
  render: function() {

    var electionInstance;

    console.log("render");

    var content = $("#content");
    content.show();

    // var loader = $("#loader");
    // var content = $("#content");

    // loader.show();
    // content.hide();

    // // Load account data
    // web3.eth.getCoinbase(function(err, account) {
    //   if (err === null) {
    //     App.account = account;
    //     $("#accountAddress").html("Your Account: " + account);
    //   }
    // });



    // // Load contract data
    // App.contracts.presidentElection.deployed().then(function(instance) {
    //   electionInstance = instance;
    //   return electionInstance.candidatesCount();
    // }).then(function(candidatesCount) {
    //   var candidatesResults = $("#candidatesResults");
    //   candidatesResults.empty();

    //   var candidatesSelect = $('#candidatesSelect');
    //   candidatesSelect.empty();

    //   for (var i = 1; i <= candidatesCount; i++) {
    //     electionInstance.candidates(i).then(function(candidate) {
    //       var id = candidate[0];
    //       var party = candidate[1];
    //       var name = candidate[2];
    //       var voteCount = candidate[3];

    //       // Render candidate Result
    //       var candidateTemplate = "<tr><th>" + id + "</th><td>" + party + "</td><td>" + name + "</td><td>" + voteCount +"</td></tr>"
    //       candidatesResults.append(candidateTemplate);

    //       // Render candidate ballot option
    //       var candidateOption = "<option value='" + id + "' >" + name + "</ option>"
    //       candidatesSelect.append(candidateOption);
    //     });
    //   }
    //   return electionInstance.voters(App.account);
    // }).then(function() {
    //   loader.hide();
    //   content.show();
    // }).catch(function(error) {
    //   console.warn(error);
    // });
  },

  castVote: function() {
    App.contracts.presidentElection.deployed().then(function(instance){

      electionInstance = instance;
      return electionInstance.aaa();
    }).then(function(aaa){
      console.log("asdf");
    })
  }
}

$(function() {
  $(window).load(function() {
    App.init();
  });
});
