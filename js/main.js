/* Créer la classe mère Vehicule avec les attributs et méthodes comme indiqué ci-dessus.
o La méthode display retourne une chaine concaténant les attributs de l’objet
Créer les class enfants Voiture et moto et pour chacune spécifier :
o Les attributs spécifiques (s’il y en a)
o Redéfinissez la méthode display en ajoutant « Auto : » ou « Moto : » avant de faire appel à la méthode display() du parent. Les attributs spécifiques doivent être ajoutés à la suite.
Instancier une voiture et une moto et effectuer l’affichage du résultat dans la page HTML */

import { Moto } from "./classe/moto.js";
import { Voiture } from "./classe/voiture.js";

const voiture = new Voiture("Mercedes", "Classe C", 20156, 2015, true);
const moto = new Moto("Bmw",  "R1150R Rockster", 65000, 2005 )
document.body.innerHTML += `<p>${voiture.display()}</p>`;
document.body.innerHTML += `<p> ${moto.display()}</p>`