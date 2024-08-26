import Vehicule from "./vehicule.js";

export class Moto extends Vehicule {
    constructor(marque, modele, kilometrage, annee){
        super(marque, modele, kilometrage, annee);
    }
    display() {
        return `Moto : ${super.display()}`;
    }
}