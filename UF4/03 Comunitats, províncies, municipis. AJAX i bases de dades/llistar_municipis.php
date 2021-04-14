<html>
<head>
<meta charset="UTF-8"> 
</head>
<body>
<?php
$conn = mysql_connect("localhost", "alumne", "keiL2lai");
if (!$conn) {
    $log->error('Could not connect: ' . mysql_error());
    die('Could not connect: ' . mysql_error());
}
mysql_select_db("provincies", $conn) or die('Could not select jbalmes database.');
mysql_set_charset('utf8',$conn);
	
$sql = "SELECT * FROM municipis order by id_mun";

$result = mysql_query($sql);

if (!$result) {
    $message  = 'Invalid query: ' . mysql_error() . "\n";
    die($message);
}

while ($row = mysql_fetch_assoc($result)) {
	echo $row['municipi']."<br />";
}

mysql_close($conn);

?>
</body>
</html>