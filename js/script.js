$(document).ready(function() {
	function get_random_number(max, min) {
		//Generates a random whole number between two values
		var random_number = Math.floor((Math.random() * max) + min);
		return random_number;
	}

	function get_name() {
		//Returns a random name
		var names = ["Comet", "Cupcake", "Snickerdoodle", "June Bug", "Peppermint", "Mogens", "Mikey", "Poppy", "Tex", "Patches", "Parsley", "Muir", "Quieckli"];
		var random_number = get_random_number(names.length, 0);
		var this_name = names[random_number];
		return this_name;
	}

	function get_gender() {
		//Returns random gender
	}

	function get_age() {
		//Returns age in months
	}

	function get_colors() {
		//Gets number of colors
		//Returns color combination
	}

	function get_pig() {
		var pig = {};
		pig.name = get_name();
		console.log(pig);
	}

	get_pig();
});