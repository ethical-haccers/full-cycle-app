import { Meteor } from 'meteor/meteor';
// import { Roles } from 'meteor/alanning:roles';

Meteor.publish('userAccounts', function() {
  return Meteor.users.find({}, { fields: { 'email': 1, 'username': 1, '_id': 1, }})
<<<<<<< HEAD
});
=======
});
>>>>>>> 51dc0cb65723b70dbde163439f51145c91e997b8
