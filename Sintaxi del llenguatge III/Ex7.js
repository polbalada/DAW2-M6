var persona = [
	{nom: "Pere",
	cognom: "Compte",
	salari: 3200,
	data_naix: "2000/02/23"},
	{nom: "Maria",
	cognom: "Arderiu",
	salari: 3500,
	data_naix: "2000/03/23"},
	{nom: "Anna",
	cognom: "Amigó",
	salari: 1200,
	data_naix: "1986/11/19"},
	{nom: "Núria",
	cognom: "Xandri",
	salari: 3800,
	data_naix: "1999/07/25"}
];

var llista = "";
console.log(persona[1].nom);
console.log(Date.parse(persona[1].data_naix));


persona.sort(function(a, b){return b.salari - a.salari});

for (var i=0; i<persona.length; i++) {
	llista += persona[i].nom + " " + persona[i].cognom + " " + persona[i].data_naix + ": " + persona[i].salari + "<br />";
	console.log(persona[i].nom + " " + persona[i].cognom + " " + persona.data_naix + ": " + persona[i].salari );
}

llista += "<br />";

persona.sort(function(a, b){return Date.parse(a.data_naix) - Date.parse(b.data_naix)});

for (var i=0; i<persona.length; i++) {
	llista += persona[i].nom + " " + persona[i].cognom + " " + persona[i].data_naix + ": " + persona[i].salari + "<br />";
	console.log(persona[i].nom + " " + persona[i].cognom + " " + persona.data_naix + ": " + persona[i].salari );
}

document.write (llista);