var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


var fun = 5;
 
function funFunction() {
	var fun = "Ram";
	console.log(2, fun);
}

function funnerFunction() {
	var fun = "Kaushik";
	console.log(1, fun);
}

function funnestFunction() {
	fun = "Ram Gowsik Jeyachandran"
	console.log(fun);
}

console.log(fun);
funFunction();
funnerFunction();
funnestFunction();


// Ternary operator
function isVaild() {
	return true
}

var ternaryCondition = isVaild() ? "This is true" : "This is false";
console.log(ternaryCondition); 



// switch statement
function moveCommand(direction) {
	var whatHappends;
	switch(direction) {
		case "Forward" :
		   whatHappends = "Shamrmi ur direction is Forward";
		   break;

		case "Backward" :
		   whatHappends = "Shamrmi ur direction is Backward";
		   break;

		case "Right" :
		   whatHappends = "Shamrmi ur direction is Right";
		   break;

		case "Left" :
		   whatHappends = "Shamrmi ur direction is Left";
		   break;

		default:
		   whatHappends = "Shamrmi enter a valid direcion";
		   break; 
	}

	return whatHappends;
}



const player = "Bobby";
let experience = 100;
let wizardLevel = false;

if(experience > 90) {
	let wizardLevel =  true;
	console.log("Inside",wizardLevel);
}

console.log("Outside",wizardLevel);

const name = "Sally";
const age = 30;
const pet = "dog";

const greetings = "Hello "+ name +", your age  is "+ age +", your pet is "+ pet+ ""
const greetingsBest = `Hello ${name}, your age is ${age-10}, your pet is ${pet}`


function add(a, b) {
	return a + b;
}

const add = (a,b) => a + b;


// Higher order functions
// filter, map, reduce

const array = [1,2,3,4];
const doubleArray = []
const newArray = array.forEach((num) => {
	console.log(num * 2);
	doubleArray.push(num * 2);
})

console.log('For each', doubleArray);

const mapArray = array.map((num) => {
	return num * 2;
})
console.log(mapArray);

const simMapArray = array.map(num => num * 2);
console.log(simMapArray);


const filterArray = array.filter((num) => {
	return num *2;

});
console.log(filterArray)


const reduceArray = array.reduce((accumalator, num) => {
	return accumalator + num;
}, 0);
console.log(reduceArray)

var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};


const object4 = {
	a: function() {
		console.log(this);
	}
}


class Player {
	constructor(name, type) {
		console.log('Player', this);
		this.name = name;
		this.type = type;
	}

	introduce() {
		console.log(`Hi i am ${this.name}, i am a ${this.type}`);
	}
}

class wizard extends Player {
	constructor(name, type) {
		super(name, type);
		console.log('wizard', this);
	}

	play() {
		console.log(`WEEEEEEEEEE i am a ${this.type}`);
	}
}

const wizard1 = new wizard('Shelly', 'Healer');
const wizaed2 = new wizard('Ram', 'Mobility');



'Helloo'.includes('o');

const pet = ['Cat', 'Dog', 'Cow'];
pet.includes('Cat'); // true
pet.includes('bird');

const square = (x) => x**2;
const cube = (y) => y**3;


'Ram'.padStart(10);
'Ram'.padEnd(10);









