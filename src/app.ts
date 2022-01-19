import { IObserver } from "./interfaces/IObserver";
import { ISubject } from "./interfaces/ISubject";
import { Camion } from "./classes/Camion";
import { Taxi } from "./classes/Taxi";
import { Feu } from "./classes/Feu";

let nbrCamion = 0;
const feu = new Feu(150);
let btnaddCamion = document.querySelector("#addCamion")
btnaddCamion.addEventListener("click", (e:Event)=>{
    nbrCamion++ 
    const camion:IObserver = new Camion("Camion"+nbrCamion.toString(),feu)
    feu.subscribe(camion)
})
let vitesse = document.querySelector("#feu") as HTMLInputElement
vitesse.addEventListener("change",(e:Event)=>{
    feu.setvitesse(vitesse.valueAsNumber)
})
const taxi1:IObserver = new Taxi("taxi1")
const taxi2:IObserver = new Taxi("taxi2")
const taxi3:IObserver = new Taxi("taxi3")

feu.subscribe(taxi1)
feu.subscribe(taxi2)
feu.subscribe(taxi3)



