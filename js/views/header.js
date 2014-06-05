define([
  'backbone',
  'collections/nav-items',
  'text!../../templates/header.html'
], function (Backbone, NavItemsCollection, headerTemplate) {
  'use strict';

  return Backbone.View.extend({
    el: '#header',
    render: function () {
      this.$el.html(_.template(headerTemplate, {
        navItems: this.collection.toJSON()
      }));
    }
  });
});