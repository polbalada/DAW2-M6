var alumnes = ['Agramonte Agramonte, Wineify',
'Parera Quintana, Jordi',
'Reguant Garcia, Mireia',
'Rodri, Benítez, Laura',
'Vernet Matamala, Joan',
'Aniol Bufí, Anna'
];

var cad = "";

var alumnes_desordenat = shuffle (alumnes);
/*
for (var i=0;i<alumnes_desordenat.length;i++) {
	console.log(alumnes[i]);
}
*/

//ordenació pel cognom
// https://www.w3schools.com/js/js_array_sort.asp
/*
var alumnes_ordenat = alumnes_desordenat.sort(function(a, b){
	var x = a.toLowerCase();
	var y = b.toLowerCase();
	if (x < y) {return -1;}
	if (x > y) {return 1;}
	return 0;
	}
);
*/

//ordenació pel nom, que està després de la coma
var alumnes_ordenat = alumnes_desordenat.sort(function(a, b){
	//console.log(a.slice(a.indexOf(", ")).toLowerCase());
	var x =  a.slice(a.indexOf(", ")).toLowerCase();
	var y =  b.slice(b.indexOf(", ")).toLowerCase();

	if (x < y) {return -1;}
	if (x > y) {return 1;}
	return 0;
	}
);

for (var i=0;i<alumnes_ordenat.length;i++) {
	console.log(alumnes_ordenat[i]);
	cad +=  alumnes_ordenat[i] + "<br />";
}

document.getElementById("demo").innerHTML = cad;


// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
