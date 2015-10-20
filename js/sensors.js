var margin = {top: 20, right: 20, bottom: 70, left: 40},
	width = 600 - margin.left - margin.right,
	height = 300 - margin.top - margin.bottom;

var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis()
	.scale(x)
	.orient("bottom")
	.ticks(1);

var yAxis = d3.svg.axis()
	.scale(y)
	.orient("left")
	.ticks(2);

d3.select("body").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//d3.json("js/sensordata.json", function(error, data) {

/*	var sensorData = data.rows;
	var nestedSensorData = d3.nest()
		.key(function(el) {return el.key})
		.entries(sensorData);

	nestedSensorData.forEach(function (el) {
		el.numMeasures = el.values.length;
	});

	var sensor1 = nestedSensorData[0].values;

	console.log(nestedSensorData); */

/*	x.domain([0, data.length]);
	//console.log(data.length);

	y.domain([0, d3.max(data, function(d) { return d.temp})]);


	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0, " + height + ")")
		.call(xAxis)
		.selectAll("text")
		.style("text-anchor", "end")
		.style("dx", "-.8em")
		.style("dy", "-.55em")
		.attr("transform", "rotate(-90)");

	svg.append("g")
		.attr("class", "y axix")
		.call(yAxis)
		.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", 6)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text("Value ($)");

	svg.selectAll("bar")
		.data(data)
		.enter().append("rect")
		.style("fill", "steelblue")
		.attr("x", function(d) { return x(d.id);})
		.attr("width", x.rangeBand())
		.attr("y", function(d) { return y(d.temp);})
		.attr("height", function(d) { return height - y(d.temp);});

//});*/