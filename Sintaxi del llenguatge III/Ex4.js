var quijote="En un lugar de la Mancha2, de cuyo nombre no quiero acordarme3, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor4. Una olla de algo más vaca que carnero, salpicón las más noches5, duelos y quebrantos los sábados6, lantejas los viernes7, algún palomino de añadidura los domingos8, consumían las tres partes de su hacienda9. El resto della concluían sayo de velarte10, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo11, y los días de entresemana se honraba con su vellorí de lo más fino12. Tenía en su casa una ama que pasaba de los cuarenta y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza que así ensillaba el rocín como tomaba la podadera13. Frisaba la edad de nuestro hidalgo con los cincuenta años14. Era de complexión recia, seco de carnes, enjuto de rostro15, gran madrugador y amigo de la caza. Quieren decir que tenía el sobrenombre de «Quijada», o «Quesada», que en esto hay alguna diferencia en los autores que deste caso escriben, aunque por conjeturas verisímilesII se deja entender que se llamaba «Quijana»III, 16. Pero esto importa poco a nuestro cuento: basta que en la narración dél no se salga un punto de la verdad."
str="";
var num=0;

while(num != -1){
    num=quijote.indexOf('la',num+1);
    console.log(num);
    str += num + " ";
}
document.getElementById("demo").innerHTML = str;