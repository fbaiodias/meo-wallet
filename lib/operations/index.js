var request = require('request');
var config = require('./../../config.json');

exports = module.exports;

exports.getOperations = function getOperations(query, callback) {

  var options = {
    url: config.url + 'operations/?' + query,
    headers: {
      'User-Agent': 'request',
      'Content-Type': 'application/json',
      'Authorization': 'WalletPT '+config.key
    }
  };

  request.get(options, gotOperations);

  function gotOperations(error, response, body) {
    if(error){
      return callback(error, null);
    }
    return callback(null, body);
  }
}

exports.getOperation = function getOperation(id, callback) {

  var options = {
    url: config.url + 'operations/' + id,
    headers: {
      'User-Agent': 'request',
      'Content-Type': 'application/json',
      'Authorization': 'WalletPT '+config.key
    }
  };

  request.get(options, gotOperation);

  function gotOperation(error, response, body) {
    if(error){
      return callback(error, null);
    }
    return callback(null, body);
  }
}

exports.refund = function refundOperation(id, type, callback) {

  var options = {
    url: config.url + 'operations/' + id + '/refund',
    headers: {
      'User-Agent': 'request',
      'Content-Type': 'application/json',
      'Authorization': 'WalletPT '+config.key
    },
    json: {
      'type': type
    }
  };

  request.get(options, refundOperation);

  function refundOperation(error, response, body) {
    if(error){
      return callback(error, null);
    }
    return callback(null, body);
  }
}

