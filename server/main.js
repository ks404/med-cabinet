import { Meteor } from 'meteor/meteor';

import { Meddb } from '/imports/data/api/medicine_data.js';

import "/imports/data/api/medicine_data.js";


Meteor.startup(() => {
  // code to run on server at startup



});

console.log(Meddb.find().fetch());


