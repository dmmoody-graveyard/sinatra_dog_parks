App.ParkRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('park', params.id);
  }
});
