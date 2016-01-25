import DS from 'ember-data';

export default DS.Model.extend({
  // TODO: Add validators and length limits to fields for UI layer
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('phone'),

  profile: DS.belongsTo('config'),
  sessions: DS.hasMany('session')
});
