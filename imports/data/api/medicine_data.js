
import { Mongo } from 'meteor/mongo';

import { Meteor } from 'meteor/meteor';



export const Meddb = new Mongo.Collection('meddb');



if (Meteor.isServer) {

Meteor.publish('user_cabinet',

  function userPublication() 
  {

    var currentUser = this.userId;

    console.log(this.userId);

    return Meddb.find({ createdBy: currentUser});

  })
}
