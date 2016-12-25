
Router.route('/cabinet', {

template: "cabinet"


});

import "./cabinet.html";

import { Meteor } from 'meteor/meteor';

import { Meddb } from '/imports/data/api/medicine_data.js';


Template.cabinet.helpers ({

makelist() {

    Meteor.subscribe('user_cabinet');

    var my_meds = Meddb.find().fetch();

    console.log(Meddb.find().fetch());

    return my_meds;


 },


 });

Template.cabinet.events ({


'click #del_button': function()

    {
  
      console.log('click del');

      Meddb.remove(this._id);



    },

'click #med_button': function(event) 

  {


        var keyword = event.target.firstChild.nodeValue;

        console.log(keyword);

        

        Meteor.call('api_call', keyword, function(error, result) 

        {


          Session.set('search_data', result); // works


        });



        Meteor.call('api_use_call', keyword, function(error, result) {

          Session.set('use_data', result);




        });

        var active = "active";

        return active;


  }


})