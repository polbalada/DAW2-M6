<?php

$host = 'localhost';
$bbdd = 'javascript';
$user = 'root';
$pass = '';

$conn = new mysqli($host, $user, $pass, $bbdd);
if ($conn -> connect_errno) {
    die("Fallo la conexion:(". $conn->mysqli_connect_errno() . ")" . $conn->mysqli_connect_error());
}

// -----------------------------------------------------------------

$tabla = "";

$query = "SELECT * FROM segells, tema, tema_segells";

// -----------------------------------------------------------

if(isset($_POST['segells'])) {
    $q = $conn->real_escape_string($_POST['segells']);

    $query = "SELECT * FROM segells WHERE pais LIKE '%" . $q . "%'";
}

$buscarSegells = $conn->query($query);
if ($buscarSegells->num_rows > 0) {
    $tabla .= '<table><tr><td>id Segell</td><td>Segell</td><td>Pais</td><td>Year</td></tr>';
    while($filaSegells = $buscarSegells->fetch_assoc()) {
        $tabla .= '<tr><td>' . $filaSegells['id_segell'] . '</td><td>' . $filaSegells['segell'] . '</td><td>' . $filaSegells['pais'] . '</td><td>' . $filaSegells['year'] . '</td></tr>';
    }
    $tabla .= '</table>';
}
else {
    $tabla = "No he han encontrado coincidencias con el pais buscado.";
}

echo $tabla;

?>