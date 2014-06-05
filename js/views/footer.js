define([
  'underscore',
  'backbone',
  'text!../../templates/footer.html'
], function (_, Backbone, footerTemplate) {
  'use strict';

  return Backbone.View.extend({
    el: '#footer',
    render: function () {
      this.$el.html(_.template(footerTemplate, {
        year: new Date().getFullYear()
      }));
    }
  });
});