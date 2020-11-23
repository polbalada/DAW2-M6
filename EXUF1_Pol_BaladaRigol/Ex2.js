var comarques =["Alt Camp","Alt Empordà","Alt Penedès","Alt Urgell ","Alta Ribagorça","Anoia","Bages","Baix Camp","Baix Ebre","Baix Empordà","Baix Llobregat","Baix Penedès","Barcelonès","Berguedà","Cerdanya","Conca de Barberà","Garraf","Garrigues","Garrotxa","Gironès","Maresme","Montsià","Noguera","Osona","Pallars Jussà","Pallars Sobirà","Pla de l'Estany","Pla d'Urgell","Priorat","Ribera d'Ebre","Ripollès","Segarra","Segrià","Selva","Solsonès","Tarragonès","Terra Alta","Urgell","Vall d'Aran","Vallès Occidental","Vallès Oriental"];

console.log("Començen per Baix")
for (let i = 0; i < comarques.length; i++) {
    if (comarques[i].match(/^Baix/)) {
        console.log(comarques[i]);
    }
}

console.log("Començen per Alt")
for (let i = 0; i < comarques.length; i++) {
    if (comarques[i].match(/^Alt/)) {
        console.log(comarques[i]);
    }
}

console.log("Començen per Ba")
for (let i = 0; i < comarques.length; i++) {
    if (comarques[i].match(/^Ba/)) {
        console.log(comarques[i]);
    }
}

console.log("Acaben per dà")
for (let i = 0; i < comarques.length; i++) {
    if (comarques[i].match(/dà$/)) {
        console.log(comarques[i]);
    }
}