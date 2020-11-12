var cad = " cadena amb espais blancs als extrems ";
str = cad + " " + cad.length +  "<br />";
str += cad.trim() + " " + cad.trim().length +  "<br />";
var cad2 = trim(cad);
str += cad2 + " " + cad2.length +  "<br />";
document.getElementById("demo").innerHTML = str;

function trim(s) {
	return s.trim();
}