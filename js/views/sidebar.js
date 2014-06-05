define([
  'backbone',
  'text!../../templates/sidebar.html'
], function (Backbone, sidebarTemplate) {
  'use strict';

  return Backbone.View.extend({
    el: '#sidebar',
    render: function () {
      this.$el.html(sidebarTemplate);
    }
  });
});