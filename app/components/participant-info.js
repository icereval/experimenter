import Ember from 'ember';
import config from '../config/environment';

export default Ember.Component.extend({

  location: config.locationType,
  metrics: Ember.inject.service(),


  isEditing: false,
  actions: {
    edit() {
      this.set('isEditing', true);

      const category = 'participant-page';
      const action = 'edit';
      // const label = this.participant.firstName;

      Ember.get(this, 'metrics').trackEvent({ category, action });
    },
    stopEditing() {
   	  this.set('isEditing', false);
    },
  }
});
