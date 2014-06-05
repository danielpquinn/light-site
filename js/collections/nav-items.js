define([
  'backbone',
  'models/nav-item'
], function (Backbone, NavItemModel) {
  'use strict';

  return Backbone.Collection.extend({
    url: '/data/nav-items.json',
    model: NavItemModel
  });
});