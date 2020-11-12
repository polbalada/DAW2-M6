time1 = new Date().getTime();
bigLoop();
time2 = new Date().getTime();
var temps = time2 -time1;
document.getElementById("demo").innerHTML = "El script ha trigat " + temps + " milisegons a executar-se";

function bigLoop(){
	for (var i = 0; i <= 100000000; i += 1){
		var j = i;
	}
}
