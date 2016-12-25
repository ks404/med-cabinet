import "./use_chart.html";

Template.use_chart.helpers({

  fillchart() {

    var chartdata = Session.get('use_data');

    console.log("fillchart");

    var mydata = [{"storage":chartdata[0].storage_and_handling, "brand_name":chartdata[0].openfda.brand_name,
                   "substance_name":chartdata[0].openfda.substance_name, "generic_name":chartdata[0].openfda.generic_name,
                    "route":chartdata[0].openfda.generic_name, "route":chartdata[0].openfda.route, "dosage": chartdata[0].dosage_and_administration, "description": chartdata[0].description}];


    console.log(mydata[0].brand_name);
    
  
/*
    var storage = chartdata[0].storage_and_handling;

    var brand_name = chartdata[0].openfda.brand_name;

    var substance_name = chartdata[0].openfda.substance_name;

    var generic_name = chartdata[0].openfda.generic_name;

    var route = chartdata[0].openfda.route;

    var dosage = chartdata[0].dosage_and_administration;
  */

  console.log(mydata);

  
  return mydata;

  }


})