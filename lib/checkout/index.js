var request = require('request');
var config  = require('./../../config.json');

var sharedOptions = function(id) {
  return {
    url: config.url + 'checkout/' + id,
    headers: {
      'User-Agent': 'request',
      'Content-Type': 'application/json',
      'Authorization': 'WalletPT ' + config.key
    }
  }
};

exports = module.exports;

exports.create = function createCheckout(payment, callback) {

  var options = {
    url: config.url + 'checkout',
    headers: {
      'User-Agent': 'request',
      'Content-Type': 'application/json',
      'Authorization': 'WalletPT ' + config.key
    },
    json: {
      "payment": payment,
      "url_confirm":config.url_confirm,
      "url_cancel":config.url_cancel
    }
  };

  request.post(options, postedCheckout);

  function postedCheckout(error, response, body) {
    if (error) { return callback(error, null); }
    return callback(null, body);
  }
}

exports.get = function getCheckout(id, callback) {
  request.get(sharedOptions(id), gotCheckout);

  function gotCheckout(error, response, body) {
    if (error) { return callback(error, null); }
    return callback(null, JSON.parse(body));
  }
}

exports.delete = function deleteCheckout(id, callback) {
  request.del(sharedOptions(id), deletedCheckout);

  function deletedCheckout(error, response, body) {
    if (error) { return callback(error, null); }
    return callback(null, JSON.parse(body));
  }
}
