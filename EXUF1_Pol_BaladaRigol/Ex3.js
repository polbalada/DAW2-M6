function valida_diposit_legal(codi) {
    if(codi.match(/^[A-Z]\.[0-9]{1,5}-[1-2][0-9]{3}$/)){
        return true
    }return false;
}

console.log(valida_diposit_legal("B.3956-2019"));
console.log(valida_diposit_legal("B.6-2019"));
console.log(valida_diposit_legal("B.62019"));
console.log(valida_diposit_legal("B.-2019"));
console.log(valida_diposit_legal("B3956-2019"));
console.log(valida_diposit_legal(".3956-2019"));
console.log(valida_diposit_legal("B.3956-3019"));