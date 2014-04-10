var request = require('request');
var config = require('./../../config.json');

exports = module.exports;

exports.create = function create(payment, callback) {

  var options = {
    url: config.url + 'checkout',
    headers: {
      'User-Agent': 'request',
      'Content-Type': 'application/json',
      'Authorization': 'WalletPT '+config.key
    },
    json: {
      "payment": payment,
      "url_confirm":config.url_confirm,
      "url_cancel":config.url_cancel
    }
  };

  request.post(options, postedCheckout);

  function postedCheckout(error, response, body) {
    if(error){
      return callback(error, null);
    }
    return callback(null, body);
  }
}