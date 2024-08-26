/* Créer les class enfants Voiture et moto et pour chacune spécifier :
o Les attributs spécifiques (s’il y en a)
o Redéfinissez la méthode display en ajoutant « Auto : » ou « Moto : » avant de faire appel à la méthode display() du parent. Les attributs spécifiques doivent être ajoutés à la suite.
voiture clim en plus des attributs spécifiques de la classe mère 
utilise egalement la methode diplay 

*/

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


