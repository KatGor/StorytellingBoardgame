'use strict';

var OnceUponAtimeApp = require('./OnceUponAtimeApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={OnceUponAtimeApp}>
    <Route name="/" handler={OnceUponAtimeApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
