// In Angular, everything is part of a module. A module is really
// very similar to a namespace. You've been doing this in
// your app.js: var app = {}; The app object (or namespace)
// is kind of like a module. You can hang lots of functions and
// classes and things off of a module. It's really just a way of
// organizing your code. If you have several classes that are
// all kind of related, they should go in the same module.
//
// An Angular app can have many modules. You declare a new module
// like this:
//
// angular.module('modulename', [])
//
// For now, don't worry too much about the array at the end.
// We'll get to that later.
//
// Now, one of the things that you'll often put into a module is
// a special kind of class called a controller. And that brings us
// to MVC. MVC stands for Model View Controller. It's a pattern
// that is really popular in the web world. It's simpler than it
// sounds.
//
// Model - A model is just a data object. Nothing more. Like your
// Appointment object from the Appointments project.
//
// View - A view is just the template that displays your model.
//
// Controller - A controller is an object whose responsibility is
// to take a model and associate it with a view, and provide methods
// that the view may call.
//
// Alright. Putting it all together, here is an Angular module that
// has one class in it. The class is named 'IntroCtrl'. In Angular,
// controllers generally go in their own .js file which ends in
// '-controller.js'. Controller names generally are PascalCased,
// because controllers are classes. Finally, controller names should
// end in 'Ctrl'. This is just a convention, but it is a pretty
// standard on in the Angular world.
angular.module('intro', []).controller('IntroCtrl', function() {
  // Angular controllers have to be prototypal, so we have
  // to use the 'this' keyword. We'll only use it once, so that
  // we avoid all of the problems with using 'this'.
  var self = this;

  // Any properties on the controller are accessible in the
  // view. Let's give our controller an invoice property:
  self.invoice = {
    company: 'Acme Widget Co',

    lineItems: [{
      description: 'Plumbing',
      cost: 43.50
    }, {
      description: 'Elecrical',
      cost: 23.90
    }],

    total: function () {
      return self.invoice.lineItems.reduce(function (total, item) {
        return total + item.cost;
      }, 0);
    }
  };

  // You could argue that the addLineItem and deleteLineItem
  // should be methods on the invoice object, and that'd be
  // fair. I put them in the controller to separate data (nouns)
  // from actions (verbs).
});
