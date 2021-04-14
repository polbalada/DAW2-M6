<?php
header("Access-Control-Allow-Origin: *");

header('content-type: text/plain; charset=utf-8');
header("access-control-allow-origin: *");
$data="";

$dir = "http://joanqc.no-ip.biz/iesbalmes/wec/receptes/recipes/";
$contents = file_get_contents($dir);
$lines = explode("\n", $contents);

foreach($lines as $line) {
    if(strpos($line,'xml')!=false) { 
        $line = preg_replace('/<[^<]+?>/', '', $line); // removes tags, curtousy of http://stackoverflow.com/users/154877/marcel
        $line = preg_replace('/\.xml.*/', '.xml', $line);
        //echo $line . "<br>";
        $url = $dir . $line;
        //echo $url . "<br>";

        //SimpleXML functions are part of the PHP core
        $xml = simplexml_load_file($url)
            or die("Error: Cannot create object");
        
        foreach($xml->children() as $child)
        {
            if (!strstr($child->getName(),'recipe')) {
            //echo $child->getName() . ": " . $child . "<br />";
            if ($child->getName() == "title") {
                $title = $child;
                break;
            }
            }
        }
        $data .= '<option value='.$url.'>'.$title."</option>";
    }
}
echo $data;
//echo /*$_GET['callback'] .'('.*/json_encode($data)/*.')'*/;
?>