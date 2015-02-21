app.config(['$routeProvider', function($routeProvider) {
  // NOTE: For templates to load correctly, your code has to
  // be running in a server.
  //
  // If you use Gulp, you're good to go. This demo isn't in
  // Gulp (yet), so I'm using this:
  // 
  // python -m SimpleHTTPServer 8000

  var routeDefinition = {
    templateUrl: 'invoices/invoices.html',
    controller: 'InvoicesCtrl',
    controllerAs: 'vm'
  };

  $routeProvider.when('/', routeDefinition);
  $routeProvider.when('/invoices', routeDefinition);
}])
.controller('InvoicesCtrl', ['Invoice', function(Invoice) {
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
