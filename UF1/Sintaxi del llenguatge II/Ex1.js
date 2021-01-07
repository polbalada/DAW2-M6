//primavera: 21 març - 20 juny
//estiu: 21 juny - 20 set
//tardor: 21 set - 20 des
//hivern: 21 des - 20 mar

function myFunction(){
    var fecha = new Date();
    fecha.setMonth(0);
    var dia = fecha.getDate();
    var mes = fecha.getMonth();
    console.log(dia);
    console.log(mes);

    var estacio="";
    
    if((mes==2 && dia>=21) || mes==3 || mes==4 || (mes==5 && dia<21)){
        estacio = "primavera";
    }else if((mes==5 && dia>=21) || mes==6 || mes==7 || (mes==8 && dia<21)){
        estacio = "estiu";
    }else if((mes==8 && dia>=21) || mes==9 || mes==10 || (mes==11 && dia<21)){
        estacio = "tardor";
    }else{
        estacio = "hivern";
    }
    console.log(estacio);
    document.getElementById("demo").innerHTML = estacio;
}