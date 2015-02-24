angular.module('app', []).controller('BikesCtrl', function () {
  var self = this;

  self.showPromos = true;

  self.bikes = [];

  self.addBike = function () {
    self.bikes.push(Bike());
  };

  self.editBikes = function (edit) {
    self.showPromos = !edit;
  };

  function Bike(spec) {
    var self = Product(spec);

    self.accessories = [];

    self.addAccessory = function () {
      self.accessories.push(Product());
    };

    return self;
  }

  function Product(spec) {
    spec = spec || {};
    return {
      name: spec.name || 'Unknown product',
      price: spec.price || 0
    };
  }
});
