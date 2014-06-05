define([
  'backbone',
  'collections/nav-items',
  'views/header',
  'views/page'
], function (Backbone, NavItemsCollection, HeaderView, PageView) {
  'use strict';

  return function (page) {
    var page = page || 'index',
      headerView = new HeaderView(),
      pageView = new PageView();

    headerView.collection = new NavItemsCollection();
    headerView.collection.fetch()
      .success(function () {
        headerView.render();
      });

    pageView.template = '/data/' + page + '.html';
    pageView.render();
  }
});