meo-wallet
==========

Node wrapper for MEO Wallet API
https://developers.wallet.pt/

# Usage

```javascript
var wallet = require('meo-wallet');

wallet.checkout.create({
  "client": {
    "name": "some name",
    "email": "foo@bar.com",
    "address": {
      "country": "pt",
      "address":"some street",
      "city": "lisboa",
      "postalcode": "1100-000"
    }
  },
  "amount":10,
  "currency": "EUR",
  "items":[{
    "ref":123,
    "name":"Livro",
    "descr":"Um livro",
  "qt":1
  }]
}, function(error, checkout) {
  if(error) {
    console.log(error);
  }
  console.log(checkout);
});

wallet.checkout.get('153ea3e1-6fce-4e86-9c80-1169c00eae9c', function(error, checkout) {
  if(error) {
    console.log(error);
  }
  console.log(checkout);
});

wallet.checkout.delete('153ea3e1-6fce-4e86-9c80-1169c00eae9c', function(error, checkout) {
  if(error) {
    console.log(error);
  }
  console.log(checkout);
});

wallet.operations.getOperations('limit=3', function(error, operations) {
  if(error) {
    console.log(error);
  }
  console.log(operations);
});

wallet.operations.getOperation('45ff577f-3e40-5598-5eab-c235f9bb832d', function(error, operation) {
  if(error) {
    console.log(error);
  }
  console.log(operation);
});

wallet.operations.refund('45ff577f-3e40-5598-5eab-c235f9bb832d', 'full', function(error, operation) {
  if(error) {
    console.log(error);
  }
  console.log(operation);
});
```
