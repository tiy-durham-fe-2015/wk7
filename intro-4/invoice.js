// An Angular factory is simply a way of saying,
// "Hey, Angular. When someone asks you for 'Invoice', give
// them the thing that this function returns."
app.factory('Invoice', function () {
  // And we return our constructor function.
  return Invoice;

  // Here, we define our Invoice constructor
  function Invoice (spec) {
    spec = spec || {};
    
    var self = {
      company: spec.company || 'Unknown Company',

      lineItems: spec.lineItems || [],

      get total () {
        return self.lineItems.reduce(function (total, item) {
          return total + item.cost;
        }, 0);
      },

      // Really, we probably should make a LineItem class,
      // too, but I'm just being lazy and not doing it...
      addLineItem: function (description, cost) {
        self.lineItems.push({
          description: description || 'Enter description',
          cost: cost || 0
        });
      },

      deleteLineItem: function (item) {
        var index = self.lineItems.indexOf(item);

        if (index >= 0) {
          self.lineItems.splice(index, 1);
        }
      }
    };

    return self;
  }
});
