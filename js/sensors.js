
d3.json("http://firefighterhubtest.mybluemix.net/tempsensors", function(data) {
	var sensorData = data.rows;
	var nestedSensorData = d3.nest()
		.key(function(el) {return el.key})
		.entries(sensorData);

	nestedSensorData.forEach(function (el) {
		el.numMeasures = el.values.length;

		//console.log(el)

		//var maxTemp = d3.max(el, function(el) {return el.values.value[0];});

		var xScale = d3.scale.linear().domain([0,el.numMeasures]).range([0,500]);
		var yScale = d3.scale.linear().domain([0,25]).range([0,100]);
		var pix = 500/el.numMeasures;


		d3.select("body")
		.append("svg")
		.attr("width", "500")
		.attr("height", "100")
		.selectAll("rect")
		.data(el)
		.enter()
		.append("rect")
		.attr("width",  " + pix + ")
		.attr("height", " + pix + ")
		.attr("x", function(d, i) {return i*xScale(d.numMeasures);})
		.attr("y", function(d, i) {return 100 - yScale(d.values[i].value[0]);})
		.style("fill", "blue");
	})



	//console.log(nestedSensorData);


});