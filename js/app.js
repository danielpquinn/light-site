define([
  'backbone',
  'router'
], function (Backbone, Router) {
  'use strict';

  function App() {
    this.router = new Router();
  }

  App.prototype.initialize = function () {
    Backbone.history.start();
  };

  return App;
});