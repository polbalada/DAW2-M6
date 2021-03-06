<?php
header("Access-Control-Allow-Origin: *");
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script>
    function loadXMLDoc(url) {
      if(url==""){
        return;
      }
      //url = "recipes/" + url;
      var xmlhttp;
      var txt = "";
      var x, xx, i;
      if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
      }
      else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          /* --------------------------------------------------------------------------TITOL-------------------------------------------------------------------------- */
          txt += "<div id=\"titol\">";
          x = xmlhttp.responseXML.documentElement.getElementsByTagName("title");
          txt += "<h2>" + x[0].firstChild.nodeValue + "</h2>";
          txt += "</div>";
          /* --------------------------------------------------------------------------FINAL TITOL-------------------------------------------------------------------------- */
          /* --------------------------------------------------------------------------GENERE/FOTO-------------------------------------------------------------------------- */
          txt += "<div id=\"foto\">";
          x = xmlhttp.responseXML.documentElement.getElementsByTagName("genre");
          txt += "<h3>" + x[0].firstChild.nodeValue + "</h3>";
          x = xmlhttp.responseXML.documentElement.getElementsByTagName("img");
          txt += "<img src=recipes/" + x[0].firstChild.nodeValue + ">";
          txt += "</div>";
          /* --------------------------------------------------------------------------FINAL GENERE/FOTO-------------------------------------------------------------------------- */
          /* --------------------------------------------------------------------------INGREDIENTS-------------------------------------------------------------------------- */
          txt += "<div id=\"ingredients\">";
          txt += "<h2>Ingredients</h2>";
          txt += "<ul>";

          x = xmlhttp.responseXML.documentElement.getElementsByTagName("ingredient");

          for (i = 0; i < x.length; i++) {
            txt += "<li>";
            for (n = 0; n < x[i].childNodes.length; n++) {
              if (x[i].childNodes[n].nodeName == "quantity") {
                if (x[i].childNodes[n].childNodes.length > 0) {
                  txt += x[i].childNodes[n].childNodes[0].nodeValue + " ";
                }
              }
              if (x[i].childNodes[n].nodeName == "unit") {
                if (x[i].childNodes[n].childNodes.length > 0) {
                  txt += x[i].childNodes[n].childNodes[0].nodeValue + " de ";
                }
              }
              if (x[i].childNodes[n].nodeName == "fooditem") {
                if (x[i].childNodes[n].childNodes.length > 0) {
                  txt += x[i].childNodes[n].childNodes[0].nodeValue;
                }
              }
            }
            txt += "</li>";
          }
          txt += "</ul>";
          txt += "</div>";
          /* --------------------------------------------------------------------------FINAL INGREDIENTS-------------------------------------------------------------------------- */
          /* --------------------------------------------------------------------------PREPARACIO-------------------------------------------------------------------------- */
          txt += "<div id=\"preparacio\">";
          txt += "<h2>Preparació</h2>";
          x = xmlhttp.responseXML.documentElement.getElementsByTagName("preparation");
          txt += "<p>" + x[0].firstChild.nodeValue + "</p>";
          txt += "</div>";
          /* --------------------------------------------------------------------------FINAL PREPARACIO-------------------------------------------------------------------------- */
          /* --------------------------------------------------------------------------PRESENTACIO-------------------------------------------------------------------------- */
          try{
            x = xmlhttp.responseXML.documentElement.getElementsByTagName("serving");
            e = "<p>" + x[0].firstChild.nodeValue + "</p>";
            txt += "<div id=\"presentacio\">";
            txt += "<h2>Presentació</h2>";
            txt += e;
            txt += "</div>";
          }catch(error){

          }
          /* --------------------------------------------------------------------------FINAL PRESENTACIO-------------------------------------------------------------------------- */

          document.getElementById('info').innerHTML = txt;
        }
      }
      xmlhttp.open("GET", url, true);
      xmlhttp.send();
    }
  </script>
</head>

<body>
  <h1>Receptes</h1>
  <div id="formulari">
    <form name="frm_receptes" id="formu" action="#">
      <select name="recipes" onchange="loadXMLDoc(this.value)">
        <option value=""></option>
        <?php
        include 'list_recipes_callback.php'
        ?>
      </select><br />
    </form>
  </div>
  <div id="info"></div>
</body>

</html>