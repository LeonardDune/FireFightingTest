d3.json("http://firefighterhubtest.mybluemix.net/tempsensors", function(data) {
	var nestedSensors = d3.nest()
		.key(function(el) {return el.key})
		.entries(data);
});