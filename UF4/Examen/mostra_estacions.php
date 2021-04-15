<?php

$host = 'localhost';
$bbdd = 'refranys';
$user = 'root';
$pass = '';

$conn = mysqli_connect($host, $user, $pass, $bbdd);
if (!$conn) {
    die("Error en la conexió:(" . mysqli_error($conn) . ")");
}

mysqli_select_db($conn, $bbdd);

$sql = "SELECT * FROM estacio";

$result = mysqli_query($conn, $sql);

while ($row = mysqli_fetch_array($result)) {
    echo "<option value=" .$row['id_estacio'] . ">" . $row['estacio'] ."</option>";
}

mysqli_close($conn);

?>