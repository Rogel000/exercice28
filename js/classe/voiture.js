import Vehicule from "./vehicule.js";

export class Voiture extends Vehicule {
    constructor(marque, modele, kilometrage, annee, climatisation) {
        super(marque, modele, kilometrage, annee);
        this.climatisation = climatisation;
    }

    display() {
        return `Voiture : ${super.display()} -  ${this.climatisation ? 'Climatisation' : ' '}`;
    }
}


