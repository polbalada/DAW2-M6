<?php
//header('content-type: text/plain; charset=utf-8');
//header("access-control-allow-origin: *");
$data="";

if ($handle = opendir('recipes/')) {

    /* This is the correct way to loop over the directory. */
    while (false !== ($entry = readdir($handle))) {
        if (strstr($entry, '.xml')) {
            //SimpleXML functions are part of the PHP core
            $xml = simplexml_load_file('recipes/'.$entry)
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
            $data .= '<option value='.$entry.'>'.$title;


        }
    }

    closedir($handle);
}

echo /*$_GET['callback'] . */'('.json_encode($data).')';
?>