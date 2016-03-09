import Ember from 'ember';

import WarnOnExitControllerMixin from 'exp-player/mixins/warn-on-exit-controller';

export default Ember.Controller.extend(WarnOnExitControllerMixin, {
    breadCrumb: 'Preview',
    experiment: null,
    isDirty: function() {
        return this.get('model.hasDirtyAttributes');
    },
    actions: {
        saveSession(payload) {
            // Save a provided javascript object to a session object
            this.get('model').setProperties(payload);
            this.get('model').save();
        }
    }
});
