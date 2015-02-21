// It's generally a good idea to separate your application
// into modules... Generally, you have a module per feature.
// So, we'll put our invoice features in the 'invoices'
// module.
//
// A module is defined like this:
// angular.module('invoices', [])
//
// A module should only be declared once. After that, it should
// just be consumed... Like this:
//
// angular.module('invoices').controller('WhatevzCtrl', ...)
angular.module('invoices').controller('InvoicesCtrl', ['Invoice', function(Invoice) {
  var self = this;

  self.all = [];
  self.current = undefined;

  self.createInvoice = function () {
    var newInvoice = Invoice();
    self.current = newInvoice;
  };

  self.removeInvoice = function (item) {
    var index = self.all.indexOf(item);

    if (index >= 0) {
      self.all.splice(index, 1);
    }
  };

  self.doneEditing = function () {
    self.all.push(self.current);
    self.cancelEditing();
  };

  self.cancelEditing = function () {
    self.current = undefined;
  };

}]);
