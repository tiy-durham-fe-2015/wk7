// An Angular factory that returns an instance (instead of a
// constructor function) is called a service.
// Angular services are only created once for the entire application.
// So, every time that your code asks for invoiceStore, Angular will
// hand out the same instance.
//
// Note: This is called a singleton pattern. A singleton is an object
// that is only created once and is shared across the entire application.
app.factory('invoiceStore', function () {
  // We'll capture this variable in a closure, and use it
  // as our global array of invoices.
  var invoices = [];

  return {
    all: function () {
      return invoices;
    },

    add: function (invoice) {
      invoices.push(invoice);
    },

    remove: function (invoice) {
      var index = invoices.indexOf(invoice);

      if (index >= 0) {
        invoices.splice(index, 1);
      }
    }
  };

});
