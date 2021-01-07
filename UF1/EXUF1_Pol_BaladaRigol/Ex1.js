var comarques =["Alt Camp","Alt Empordà","Alt Penedès","Alt Urgell ","Alta Ribagorça","Anoia","Bages","Baix Camp","Baix Ebre","Baix Empordà","Baix Llobregat","Baix Penedès","Barcelonès","Berguedà","Cerdanya","Conca de Barberà","Garraf","Garrigues","Garrotxa","Gironès","Maresme","Montsià","Noguera","Osona","Pallars Jussà","Pallars Sobirà","Pla de l'Estany","Pla d'Urgell","Priorat","Ribera d'Ebre","Ripollès","Segarra","Segrià","Selva","Solsonès","Tarragonès","Terra Alta","Urgell","Vall d'Aran","Vallès Occidental","Vallès Oriental"];

console.log("Num de comarques");
console.log(comarques.length);

console.log("El bages està a la posicio");
console.log(comarques.indexOf("Bages"));

console.log("Ordre invers");
comarques.reverse();
console.log(comarques.toString());

console.log("Eliminar els dos ultims");
comarques.pop();
comarques.pop();
console.log(comarques.toString());
