function myFunction(){
    var array = [1,123,230,43,46];
    valor = array[0];

    for (var i = 0; i<array.length-1; i++ ) {
        //console.log(array[i]);
        if (valor<array[i+1]){
            valor = array[i+1];
        }
    }
    console.log(valor);
    document.getElementById("demo").innerHTML = valor;
}