define([
  'backbone',
  'showdown'
], function (Backbone, Showdown) {
  'use strict';

  return Backbone.View.extend({
    el: '#main',
    render: function (md) {
      var self = this;

      $.get(md, function (md) {
        self.$el.html(new Showdown.converter().makeHtml(md));
      });
    }
  });
});