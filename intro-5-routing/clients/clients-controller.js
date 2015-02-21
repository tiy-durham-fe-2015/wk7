app.config(['$routeProvider', function($routeProvider) {
  var routeDefinition = {
    templateUrl: 'clients/clients.html',
    controller: 'ClientsCtrl',
    controllerAs: 'vm'
  };

  $routeProvider.when('/clients', routeDefinition);
}])
.controller('ClientsCtrl', function (user) {
  this.user = user;
});
