import Ember from 'ember';

export default Ember.Component.extend({
    index: null,
    selectedFrame: null,
    classNames: ['panel', 'btn', 'list-frame'],
    classNameBindings: ['isSelected:selected'],
    onInit: function() {
        var type = this.get('frame.type');
        var Component = this.container.lookup(`component:exp-${type}`);
        var params = Component.setupParams(this.get('frame'));

        Object.keys(params).forEach((key) => {
            this.set(key, params[key]);
        });
    }.on('didReceiveAttrs'),
    isSelected: Ember.computed('selectedFrame', 'index', function() {
        return this.get('index') === this.get('selectedFrame');
    }),
    actions: {
        selectFrame: function(index) {
            this.get('selectFrame')(index);
        }
    }
});
