angular.module('app', []).controller('BikesCtrl', function () {
  var self = this;

  // Indicates whether or not we are showing the promotional view
  self.showPromos = true;

  // Our collection of bikes
  self.bikes = [];

  // Add a bike to our bikes list
  self.addBike = function () {
    self.bikes.push(Bike());
  };

  // We enable editing by setting showPromos to false
  self.editBikes = function (edit) {
    self.showPromos = !edit;
  };

  // Construct a new bike instance
  function Bike(spec) {
    // A bike is a product
    var self = Product(spec);

    // A bike has accessories
    self.accessories = [];

    // We can add accessories to a bike by calling bike.addAccessory()
    self.addAccessory = function () {
      self.accessories.push(Product());
    };

    return self;
  }

  // Construct a new product instance
  function Product(spec) {
    // If spec was not passed, initialize it to an empty object
    spec = spec || {};
    return {
      // If name was not passed, give it some default ('Unknown product')
      name: spec.name || 'Unknown product',
      // If price was not passed, give it some default (0)
      price: spec.price || 0
    };
  }
});
