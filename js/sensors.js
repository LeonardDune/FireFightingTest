d3.json("http://firefighterhubtest.mybluemix.net/tempsensors", function(data) {
	var sensorData = data.rows;
	var nestedSensorData = d3.nest()
		.key(function(el) {return el.key})
		.entries(sensorData);

	nestedSensorData.forEach(function (el) {
		el.numMeasures = el.values.length;
	})

	var maxMeasures = d3.max(nestedSensorData, function(el) {return el.numMeasures;});

	var yScale = d3.scale.linear().domain([0,maxMeasures]).range([0,100]);

	//console.log(nestedSensorData);

	d3.select("body")
		.append("svg")
		.selectAll("rect")
		.data(nestedSensorData)
		.enter()
		.append("rect")
		.attr("width","50")
		.attr("height", function(d) {return yScale(d.numMeasures);})
		.attr("x", function(d, i) {return i*60;})
		.attr("y", function(d) {return 100 - yScale(d.numMeasures);})
		.style("fill", "blue")
		.style("stroke", "red")
		.style("stroke-width", "1px").style("opacity", .25);
});