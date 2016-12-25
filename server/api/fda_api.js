import { Meteor } from 'meteor/meteor';

import { Meddb } from '/imports/data/api/medicine_data.js';

//---Modules

var request = require('request');
var Future = require('fibers/future'); 



Meteor.methods ({

'api_call': function(keyword) {

    console.log(keyword);

    var api_end = "https://api.fda.gov/drug/event.json?api_key=";

    var api_key = "FIdbsoGgAFb1iqyc1n01SWPlutjWNaGdwifvoH1E";

    var search_params = "&count=patient.reaction.reactionmeddrapt.exact&limit=10&search=brand_name:";

    var api_search_term = keyword;

    var api_url_full = api_end + api_key + search_params + api_search_term;



//http.request() returns an instance of the http.ClientRequest class. The ClientRequest instance is a writable stream. Is a request not a response, so no body.


//use control flow for asynchronous functions to get data out



    var api_data;

    var future = new Future(); //npm fibers/future to hold function until data arrives 

    function getData(url, callback) // make request to FDA url

    {

      request(url, callback);

      return future.wait(); //npm fibers/future to create a placeholder for future return

    };


    function parseData(error, response, body) //parse request to get body

    {

      var localData = JSON.parse(body);

      api_data = localData.results;

      future.return(api_data);

    };


  var api_data = getData(api_url_full, parseData); // run API request function, and parser

  console.log(api_data);

  return api_data;

  //return api_data;

  



  },// api call method end,



'api_use_call': function(keyword) {

 

    var api_end = "https://api.fda.gov/drug/label.json?api_key=";

    var api_key = "FIdbsoGgAFb1iqyc1n01SWPlutjWNaGdwifvoH1E";

    var search_params = "&search=";

    var api_search_term = keyword;

    var api_url_full = api_end + api_key + search_params + api_search_term;



//http.request() returns an instance of the http.ClientRequest class. The ClientRequest instance is a writable stream. Is a request not a response, so no body.


//use control flow for asynchronous functions to get data out

  console.log(api_url_full);

    var api_use_data;

    var future = new Future(); //npm fibers/future to hold function until data arrives 

    function getData(url, callback) // make request to FDA url

    {

      request(url, callback);

      return future.wait(); //npm fibers/future to create a placeholder for future return

    };


    function parseData(error, response, body) //parse request to get body

    {

      var localData = JSON.parse(body);

      api_use_data = localData.results;

      future.return(api_use_data);

    };


  var api_use_data = getData(api_url_full, parseData); // run API request function, and parser

  console.log(api_use_data);

  return api_use_data;



  }// api call method end,

});


















