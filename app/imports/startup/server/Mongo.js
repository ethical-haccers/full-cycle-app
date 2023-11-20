import { Meteor } from 'meteor/meteor';
import { Containers } from '../../api/container/Containers';

/* eslint-disable no-console */
const addContainer = (container) => {
  console.log(`  Adding Container: ${container.containerId})`);
  Containers.collection.insert(container);
};

// Initialize the ContainersCollection if empty.
if (Containers.collection.find().count() === 0) {
  if (Meteor.settings.defaultContainers) {
    console.log('Creating default containers.');
    Meteor.settings.defaultContainers.forEach(container => addContainer(container));
  }
}
