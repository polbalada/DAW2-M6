document.addEventListener("DOMContentLoaded", (event => {

    function obtener_segells(segells) {
        $.ajax({
          url: 'cerca_segells.php',
          type: 'POST',
          dataType: 'html',
          data: { segells: segells },
        })
    
          .done(function (resultado) {
            $("div3").html(resultado);
          })
      }

    document.getElementById('busqueda').addEventListener("focusout" ,(event) => {
        //console.log(event.target.value)
        const valor = event.target.value;
        if (valor != "") {
            obtener_segells(valor);
        }
        else {
            obtener_segells();
        }
    })
}));

function Inicio() {
    fetch('segells.json').then((response) => {
        return response.json()
    }).then((myJSON) => {
        document.getElementById('div1').innerHTML = myJSON.text
    }).catch((err) => {
        console.log(err)
    })
}