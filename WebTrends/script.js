//objectifymyself
//first name
//last name
//age
//major
//places you've lived
//metho to create full name
//have you seen the movie bird box
//physical features: height, hair color, eye color, tattoos, piercings

var body = document.querySelector("body");

var kanikakumar = {
	firstName: "Kanika",
	lastName: "Kumar",
	age: 21,
	major: "Industrial Design",
	places: [
		{country: "India", city: "Mumbai"},
		{country: "Australia", city: "Melbourne"},
		{country: "UAE", city: "Dubai"}, 
		{country: "USA", city: "Providence"}
		],
	features: {
		height: "5'5",
		haircolor: "brown",
		eyecolor: "brown",
		tattoos: true,
		piercings: true
	},
	seenBirdbox: true,
	fullName: function() {
		console.log(this.firstName + " " + this.lastName);
	}
}

console.log(kanikakumar.firstname);
kanikakumar.fullName();

console.log(kanikakumar.places);

function addInfo () {
	var pNode = document.createElement("p");
	body[0]
}