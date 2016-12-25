


import "./effect_chart.html";

import { Meteor } from 'meteor/meteor';

//import { DrugCollection } from '/imports/data/api/drug_data.js';



/*

Template.effect_chart.helpers({

  fillchart() {

    var chartdata = Session.get("scode");

    console.log(chartdata);

    if (chartdata = true) {

      console.log(chartdata);

    } else 

    { console.log('nodata'); }


  }


});


*/



Template.effect_chart.onRendered (

 function makechart()

  { 

    //var chartdata = Session.get("search_data");
    console.log('made original chart');
   

    var chartdata =  [ { term: 'COMPLETED SUICIDE', count: 0 },
                  { term: 'TOXICITY TO VARIOUS AGENTS', count: 0 },
                  { term: 'DRUG ABUSE', count: 0 },
                  { term: 'DEATH', count: 0 },
                  { term: 'OVERDOSE', count: 0 },
                  { term: 'INTENTIONAL OVERDOSE', count: 0 },
                  { term: 'CARDIAC ARREST', count: 0 },
                  { term: 'SUICIDE ATTEMPT', count: 0 },
                  { term: 'CARDIO-RESPIRATORY ARREST', count: 0 },
                  { term: 'RESPIRATORY ARREST', count: 0 } ];

    var padding = 70;

    var w = 1200 - padding - padding, h = 800 - padding - padding;

    var names = chartdata.map(function (d) {

      return d.term;

    });

    console.log("make chart function runs");

    var yscale = d3.scale.linear()
                        .domain([0, d3.max(chartdata, function(d,i){ return d.count })]) //need d3.values because data is an object, not array.
                        .range([h, 0]);


    var xscale = d3.scale.ordinal()
                        .domain(names)
                        .rangeRoundBands([0, w]);


    var svg = d3.select("#chartspace")
            .append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 1200 950")
   //class to make it responsive
            .classed("svg-content-responsive", true)
            .attr("class", "svgchart") // add class has to be before grouping
            .append('g')
            .attr("transform", "translate(" + 120 + "," + 80 + ")");


    var title = svg.append("text")
          .attr("x", (w / 2))             
          .attr("y", 0 - (padding / 4))
          .attr("text-anchor", "middle")  
          .style("text-decoration", "underline")  
          .text("Side Effects Since 2004")
          .style("font-size", "24px");


    var bars = svg.selectAll("rect") //select non existant rects
      .data(chartdata) // add data sto rect
      .enter()// add data and put in group g
      .append("rect") // create rects, based on data (i think)
      .attr("x", function(d,i) {return i * xscale.rangeBand() + xscale.rangeBand()/4 })
      .attr("y", function(d,i) {return yscale(d.count)})
      .attr("width", xscale.rangeBand()/2)
      .attr("height", function(d,i) {return h - yscale(d.count)});



    var yAxis = d3.svg.axis();

    yAxis.scale(yscale)
          .orient('left');

    svg.append('g')
        .call(yAxis).attr("class", "axis").attr("id", 'yaxis');


    var xAxis = d3.svg.axis()
                      .scale(xscale)
                      .orient("bottom");

    svg.append('g').attr("class", "axis").attr("id", 'xaxis').attr("transform", "translate(0," + h + ")").call(xAxis)
        .selectAll('text').style("text-anchor", "end").attr("transform", "rotate(-35)"); // create xaxis and move it to the bottom of the chart    






  });













Template.effect_chart.helpers({

  drawchart()

  { 

    var chartdata = Session.get("search_data");



    console.log('drawchart updated');


   

    var padding = 70;

    var w = 1200 - padding - padding, h = 800 - padding - padding;





// --------------------------- Set up Scales

    var names = chartdata.map(function (d) { return d.term; });




var g = d3.select('.svgchart');

console.log(chartdata);


update(chartdata);



// ---------------------------- Update Data


function update(chartdata) {




  console.log("start update function");



    var yscale = d3.scale.linear()
                        .domain([0, d3.max(chartdata, function(d,i){ return d.count })]) //need d3.values because data is an object, not array.
                        .range([h, 0]);


    var xscale = d3.scale.ordinal()
                        .domain(names)
                        .rangeRoundBands([0, w]);



    var yAxis = d3.svg.axis();

    yAxis.scale(yscale)
          .orient('left');

    g.selectAll("#yaxis").transition(t)
        .call(yAxis).attr("class", "axis");


    var xAxis = d3.svg.axis()
                      .scale(xscale)
                      .orient("bottom");

    g.selectAll("#xaxis").transition(t).attr("class", "axis").attr("transform", "translate(0," + h + ")").call(xAxis)
        .selectAll('text').style("text-anchor", "end").attr("transform", "rotate(-35)"); // create xaxis and move it to the bottom of the chart    







  var t = d3.transition()
      .duration(750);






  //Join
  var newrects = g.selectAll("rect")
                  .data(chartdata); //no append?


  //Exit
  newrects.exit().transition(t).remove();

  // now we just have old that r the same



  // Enter new elements
  newrects.transition(t)
      .attr("x", function(d,i) {return i * xscale.rangeBand() + xscale.rangeBand()/4 })
      .attr("y", function(d,i) {return yscale(d.count)})
      .attr("width", xscale.rangeBand()/2)
      .attr("height", function(d,i) {return h - yscale(d.count)});









console.log('finish update function');

};



}

//Join Elements



/*

var t = d3.transition()
      .duration(750);

var container = d3.select(".svgchart"); //grab container

var children = d3.selectAll('rect'); // get rect items ! could be g !

var updateSelection = children.data(chartdata); //bind data and creates update selection method - properties are enter and exit, which represent different types of data

var enterSelection = updateSelection.enter().transition(t); // mapping representing new dom nodes

var existSelection = updateSelection.exit().remove(); // mapping represents dom nodes that are not in the data

*/




/*
    console.log(names);

    console.log(counts);

    var yscale = d3.scale.linear()
                        .domain([0, d3.max(chartdata, function(d,i){ return d.count })]) //need d3.values because data is an object, not array.
                        .range([h, 0]);


    var xscale = d3.scale.ordinal()
                        .domain(names)
                        .rangeRoundBands([0, w]);








    var bars = svg.selectAll("rect") //select non existant rects
      .data(chartdata) // add data to rect
      .enter().append('g')// add data and put in group g
      .append("rect") // create rects, based on data (i think)
      .attr("x", function(d,i) {return i * xscale.rangeBand() + xscale.rangeBand()/4 })
      .attr("y", function(d,i) {return yscale(d.count)})
      .attr("width", xscale.rangeBand()/2)
      .attr("height", function(d,i) {return h - yscale(d.count)})


console.log('aftersvgchart');



    var yAxis = d3.svg.axis();

    yAxis.scale(yscale)
          .orient('left');

    svg.append('g')
        .call(yAxis).attr("class", "axis");


    var xAxis = d3.svg.axis()
                      .scale(xscale)
                      .orient("bottom");

    svg.append('g').attr("class", "axis").attr("transform", "translate(0," + h + ")").call(xAxis)
        .selectAll('text').style("text-anchor", "end").attr("transform", "rotate(-35)"); // create xaxis and move it to the bottom of the chart    


  },

*/

});


