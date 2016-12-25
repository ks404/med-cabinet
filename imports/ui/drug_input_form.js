
import "./drug_input_form.html";

import { Meteor } from 'meteor/meteor';

import { Meddb } from '/imports/data/api/medicine_data.js';

//import { DrugCollection } from '/imports/data/api/drug_data.js';

// is client conditional?




Template.drug_input_form.events({

  'submit .drug_form': function(event) 
      {

        event.preventDefault();


        var keyword = event.target.drug_input.value;

        Meteor.call('api_call', keyword, function(error, result) 

        {


          Session.set('search_data', result); // works

          console.log(result);

          if (result === undefined ) { alert("Leider können wir dieses Medikament nicht finden") ;};


        });



        Meteor.call('api_use_call', keyword, function(error, result) {

          Session.set('use_data', result);

          console.log('use ran');

          console.log(result);


        });

      },

  'click .addCabinet': function(event)
      {

        event.preventDefault();

        var keyword = document.getElementById('drug_input').value;

        Meteor.call('api_call', keyword, function(error, result) 

        {

          Meteor.subscribe('user_cabinet');

          var existing = Meddb.findOne({ med_name: keyword});

          if (result === undefined ) { alert("Leider können wir dieses Medikament nicht finden");}

          else if ( existing ) { alert("Dies ist in Ihrem Schrank bereits");}

          else {

             var currentUser = Meteor.userId();

              Meddb.insert({

              med_name: keyword,
              createdBy: currentUser

                          });

              }

        });

       

       console.log(keyword); 

      },


});
