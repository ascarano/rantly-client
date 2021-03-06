import DS from "ember-data";

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  email: DS.attr('string'),
  rants: DS.hasMany('rant'),
  password: DS.attr('string')
});
