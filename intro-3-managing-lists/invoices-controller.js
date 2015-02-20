// Let's go ahead and change our module to something less silly.
// 'app' is a pretty common name for an application's root module/
// namespace, so let's use that.
angular.module('app', []).controller('InvoicesCtrl', function() {
  var self = this;

  self.all = [];
  self.current = undefined;

  self.createInvoice = function () {
    var newInvoice = {
      company: 'Unknown Company',

      lineItems: [],

      get total () {
        return newInvoice.lineItems.reduce(function (total, item) {
          return total + item.cost;
        }, 0);
      }
    };

    self.all.push(newInvoice);
    self.current = newInvoice;
  };

  self.removeInvoice = function (item) {
    var index = self.all.indexOf(item);

    if (index >= 0) {
      self.all.splice(index, 1);
    }
  };

  self.doneEditing = function () {
    self.current = undefined;
  };

  self.addLineItem = function (description, cost) {
    self.current.lineItems.push({
      description: description || 'Enter description',
      cost: cost || 0
    });
  };

  self.deleteLineItem = function (item) {
    var index = self.current.lineItems.indexOf(item);

    if (index >= 0) {
      self.current.lineItems.splice(index, 1);
    }
  };

  // Bah! This is getting really long and complicated... :/
  // If only there was a better way... What to do? What to do?
});
