<?php
$conn = mysqli_connect("localhost", "root", "");
if (!$conn) {
    $log->error('Could not connect: ' . mysql_error());
    die('Could not connect: ' . mysql_error());
}
mysqli_select_db($conn,"provincies") or die('Could not select jbalmes database.');
mysqli_set_charset($conn, 'utf8');
?>