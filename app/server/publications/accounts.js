import { Meteor } from 'meteor/meteor';
// import { Roles } from 'meteor/alanning:roles';

Meteor.publish('userAccounts', function() {
  return Meteor.users.find({}, { fields: { 'email': 1, 'username': 1, '_id': 1, }})
});