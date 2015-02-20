// Now, we can just use the app defined in app.js
//
// But wait... What's that ['Invoice', function (Invoice) { thing
// all about? It's called Dependency Injection. It's telling
// Angular that our controller no longer takes zero arguments.
// We now take an argument called Invoice, and Angular will
// look deep within its complicated, dark little heart and
// give us the thing (object, function, string, whatever) that
// was registered as 'Invoice' (see invoice.js for details).
app.controller('InvoicesCtrl', ['Invoice', function(Invoice) {
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
