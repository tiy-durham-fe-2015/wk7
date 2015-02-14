angular.module('intro', []).controller('IntroCtrl', function() {
  var self = this;

  self.invoice = {
    company: 'Acme Widget Co',

    lineItems: [{
      description: 'Plumbing',
      cost: 43.50
    }, {
      description: 'Elecrical',
      cost: 23.90
    }],

    // Well, while we're introducing new things, how about we
    // make total a read-only property? It's a feature of JavaScript
    // that was introduced in version ES5 (IE 9+). Now, we can
    // access total like a property: self.invoice.total
    get total () {
      return self.invoice.lineItems.reduce(function (total, item) {
        return total + item.cost;
      }, 0);
    }
  };

  // Let's add a function to add a line item
  // to our invoice.
  self.addLineItem = function (description, cost) {
    self.invoice.lineItems.push({
      description: description || 'Enter description',
      cost: cost || 0
    });
  };

  // And maybe a function to remove an item from
  // our invoice.
  self.deleteLineItem = function (item) {
    var index = self.invoice.lineItems.indexOf(item);

    if (index >= 0) {
      self.invoice.lineItems.splice(index, 1);
    }
  };
});
