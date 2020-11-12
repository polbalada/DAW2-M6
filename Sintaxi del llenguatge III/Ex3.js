var cad = "Una polla xica, pica, pellarica, camatorta i becarica va tenir sis polls xics, pics, pellarics, camatorts i becarics. Si la polla no hagués sigut xica, pica, pellarica, camatorta i becarica, els sis polls no haguessin sigut xics, pics, pellarics, camatorts i becarics.";
var pos=0, pos_total=0;
llavor = "ic";
str = cad + "<br /><br />";

while (cad.indexOf(llavor) > 0) {
	pos = cad.indexOf(llavor);
	pos_total += pos;
	cad = cad.substr(pos + llavor.length, cad.length-(pos + llavor.length));
	str += pos_total + " " + cad + "<br />";
}

document.getElementById("demo").innerHTML = str;