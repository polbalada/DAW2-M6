function comprova(data) {
    if(data.match(/^[0-3][0-9]\/[0-1][0-9]\/[1-2][0-9]{3}$/)){
        return true
    }return false;
}

var d1="22/11/2020";
var d2="19/11/2020";

if (comprova(d1) && comprova(d2)) {
    data1 = new Date(d1.substring(6)+"-"+d1.substring(3,5)+"-"+d1.substring(0,2));
    data2 = new Date(d2.substring(6)+"-"+d2.substring(3,5)+"-"+d2.substring(0,2));
    if (data1 < data2){
        console.log("Data1 es anterior");
    }else if(data1 > data2){
        console.log("Data1 es posterior");
    }else{
        console.log("Son la mateixa data");
    }
    dif=parseInt((data2 - data1) / (1000 * 60 * 60 * 24),10);
    console.log(dif);
}