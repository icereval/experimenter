import Ember from 'ember';

let ADD_FRAME = {
    id: 'ADD_FRAME',
    type: 'add-frame'
};

export default Ember.Component.extend({
    frames: null,
    selectedFrame: 0,

    disabled: Ember.observer('frames.[]', function() {
        return this.get('frames').slice(-1)[0].id === ADD_FRAME.id;
    }),

    onInit: function() {
        this.set('frames', Ember.A(this.get('frames')));
        if (this.get('frames').length) {
            this.set('selectedFrame', 0);
        }
    }.on('didReceiveAttrs'),
    actions: {
        addComponent() {
            var frames = this.get('frames');
            frames.pushObject(ADD_FRAME);
        },
        selectFrame: function(index) {
            this.set('selectedFrame', index);
        }        
    }
});
