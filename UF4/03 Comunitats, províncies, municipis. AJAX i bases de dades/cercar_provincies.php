<?php
sleep(1);
include("open_db.php");
	
$id_com = $_GET["id_com"];
//echo $id_com;

$sql = "SELECT * FROM provincies where id_com=$id_com order by id_prov";

$result = mysqli_query($conn, $sql);

if (!$result) {
    $message  = 'Invalid query: ' . mysql_error() . "\n";
    die($message);
}
	

// Fetch all
$allrows = mysqli_fetch_all($result, MYSQLI_ASSOC);

$result->close();

$myJSON = json_encode($allrows);
echo $myJSON;

?>