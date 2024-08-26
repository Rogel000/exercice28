import { Moto } from "./classe/moto.js";
import { Voiture } from "./classe/voiture.js";

const voiture = new Voiture("Mercedes", "Classe C", 20156, 2015, true);
const moto = new Moto("Bmw",  "R1150R Rockster", 65000, 2005 )
document.body.innerHTML += `<p>${voiture.display()}</p>`;
document.body.innerHTML += `<p> ${moto.display()}</p>`