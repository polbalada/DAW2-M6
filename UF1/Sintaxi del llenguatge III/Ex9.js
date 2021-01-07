var cad = "En un lugar de la Mancha";

String.prototype.primeraMajuscula = function() {
	var arr=this.split(" ");
	for (i=0; i<arr.length; i++) {
		arr[i] = capitalizeFirstLetter(arr[i]);
		console.log(arr[i]);
	}
	return arr.join(" ");
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.getElementById("demo").innerHTML = cad.primeraMajuscula();
