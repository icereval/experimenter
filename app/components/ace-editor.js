// h/t https://gist.github.com/ViktorQvarfordt/10432265

import Ember from 'ember';

export default Ember.Component.extend({
    value: null,
    classNames: ['ace-editor'],
    didInsertElement: function() {
        var ace = this.get('ace');
        
        this.editor = ace.edit(this.get('element'));
  
        this.editor.setHighlightActiveLine(false);
        this.editor.setShowPrintMargin(false);
        this.editor.getSession().setTabSize(2);
        this.editor.getSession().setMode('ace/mode/json');

        this.editor.setValue(this.get('value') || JSON.stringify({}));
        
        this.editor.on('change', function() {
            this.set('value', this.editor.getSession().getValue());
        }.bind(this));
    },
    valueChanged: function() {
        if (!this.get('value'))
            this.editor.getSession().setValue('');
        else if (this.editor.getSession().getValue() !== this.get('value'))
            this.editor.getSession().setValue(this.get('value'));
    }.observes('value')
});
