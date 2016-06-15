import Ember from 'ember';

export default Ember.Controller.extend({
  showNavigationLabels: false,

  actions: {
    toggleNavigation() {
      this.toggleProperty('showNavigationLabels');
    }
  }
});


