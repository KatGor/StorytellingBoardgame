'use strict';

describe('OnceUponAtimeApp', function () {
  var React = require('react/addons');
  var OnceUponAtimeApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    OnceUponAtimeApp = require('components/OnceUponAtimeApp.js');
    component = React.createElement(OnceUponAtimeApp);
  });

  it('should create a new instance of OnceUponAtimeApp', function () {
    expect(component).toBeDefined();
  });
});
