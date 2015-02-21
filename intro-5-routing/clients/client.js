// Create a client model
app.factory('Client', function () {
  // And we return our constructor function.
  return Client;

  // Here, we define our Client constructor
  function Client (spec) {
    spec = spec || {};

    var self = {
      name: spec.name,

      company: spec.company,

      phone: spec.phone,

      email: spec.email
    };

    return self;
  }

});
