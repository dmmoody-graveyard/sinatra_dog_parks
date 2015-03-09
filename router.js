App.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('park', {path: 'parks/:id'});
});
