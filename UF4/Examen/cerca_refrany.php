<?php

$f = $_GET['f'];
$e = $_GET['e'];

$host = 'localhost';
$bbdd = 'refranys';
$user = 'root';
$pass = '';

$conn = mysqli_connect($host, $user, $pass, $bbdd);
if (!$conn) {
    die("Error en la conexió:(" . mysqli_error($conn) . ")");
}

mysqli_select_db($conn, $bbdd);

$sql = "SELECT * FROM refrany WHERE id_estacio=$e AND refrany LIKE '%$f%'" ;
$result = mysqli_query($conn, $sql);

echo '<table>';

while ($row = mysqli_fetch_array($result)) {
    echo '<tr><td>' . $row['refrany'] . '</td></tr>';
}

echo '</table>';

mysqli_close($conn);

?>