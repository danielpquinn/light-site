define([
  'underscore',
  'jquery',
  'backbone',
  'router',
  'templates'
], function (_, $, Backbone, Router, templates) {
  'use strict';

  function App() {
    this.router = new Router();
  }

  App.prototype.initialize = function () {
    this.loadTemplates().then(function () {
      Backbone.history.start();
    });
  };

  App.prototype.loadTemplates = function () {
    var d = new $.Deferred(),
      theme = '';

    var getTemplate = function (name) {
      var _d = new $.Deferred();
      $.ajax('/themes/' + theme + '/' + name + '.html')
        .then(function (template) {
          templates[name] = template;
          _d.resolve();
        });
      return _d.promise();
    };

    $.getJSON('/data/config.json').then(function (config) {
      theme = config.theme;

      $.when(getTemplate('header'), getTemplate('sidebar'), getTemplate('footer'))
        .done(d.resolve);
    });

    return d.promise();
  };

  return App;
});