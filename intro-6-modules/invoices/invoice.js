// Making our Invoice object part of the invoices module, too
angular.module('invoices').factory('Invoice', function () {
  // And we return our constructor function.
  return Invoice;

  // Here, we define our Invoice constructor
  function Invoice (spec) {
    spec = spec || {};

    var self = {
      company: spec.company || 'Unknown Company',

      lineItems: spec.lineItems || [LineItem()],

      get total () {
        return self.lineItems.reduce(function (total, item) {
          return total + item.cost;
        }, 0);
      },

      addLineItem: function (description, cost) {
        self.lineItems.push(LineItem({
          description: description,
          cost: cost
        }));
      },

      deleteLineItem: function (item) {
        var index = self.lineItems.indexOf(item);

        if (index >= 0) {
          self.lineItems.splice(index, 1);
        }

        // Don't allow 0 line items
        if (!self.lineItems.length) {
          self.lineItems.push(LineItem());
        }
      }
    };

    return self;
  }

  // The LineItem class represents a single line item in
  // an invoice
  function LineItem (spec) {
    spec = spec || {};

    return {
      description: spec.description || 'Enter description',
      cost: spec.cost || 0
    };
  }

});
