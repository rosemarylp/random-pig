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
		var random_number = get_random_number(1, 0);
		var gender = random_number ? "Female":"Male";
		return gender;
	}

	function get_age() {
		//Returns age in months
		var age = get_random_number(72, 1);
		return age;
	}

	function get_colors() {
		//Gets number of colors
		//Returns color combination
		var all_colors = ["black", "white", "orange", "light brown", "dark brown", "tan", "golden agouti", "silver agouti", "gray"];
		var random_number = get_random_number(3, 1);
		var num_colors = random_number;
		var colors = [];

		for (var i=0; i < num_colors; i++) {
			var this_num = get_random_number(all_colors.length, 0);
			var this_color = all_colors[this_num];
			all_colors.splice(this_num, 1);
			colors.push(this_color);
		}

		return colors;
	}

	function get_breed() {
		//Returns random breed
		var all_breeds = ["American", "Teddy", "Peruvian", "Silkie", "Abyssinian", "Crested", "Silkie", "Texel", "Rex", "Coronet", "Baldwin"];
		var random_number = get_random_number(all_breeds.length, 0);
		var this_breed = all_breeds[random_number];
		return this_breed;
	}

	function get_pig() {
		var pig = {};
		pig.name = get_name();
		pig.gender = get_gender();
		pig.age = get_age() + " months";
		pig.colors = get_colors();
		pig.breed = get_breed();
		console.log(pig);
	}

	get_pig();
});