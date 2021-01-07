class Plat {
    constructor(preu, nom, temps, taula, estat) {
        this.preu = preu;
        this.nom = nom;
        this.temps = temps;
        this.taula = taula;
        this.estat = estat;
    }

    canvi_estat(){
        if (this.estat=="cuina") {
            this.estat="servit";
        }else if (this.estat=="servit") {
            this.estat="cobrat";
        }
    }
}

  p1 = new Plat(10,"Bocata",10, "A1", "servit");
  p2 = new Plat(2,"Birra",1, "B3", "cobrat");
  p3 = new Plat(4,"Bravas",10, "A1", "cuina");

  console.log(p1.nom);
  console.log(p1.estat);
  p1.canvi_estat();
  console.log(p1.estat);

  console.log(p2.nom);
  console.log(p2.estat);
  p2.canvi_estat();
  console.log(p2.estat);

  console.log(p3.nom);
  console.log(p3.estat);
  p3.canvi_estat();
  console.log(p3.estat);