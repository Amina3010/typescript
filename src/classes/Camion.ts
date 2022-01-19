import { IObserver } from "../interfaces/IObserver";
import { ISubject } from "../interfaces/ISubject";
import { Feu } from "./Feu";

export class Camion implements IObserver {
   private htmlDiv : HTMLDivElement;
   private htmlButton : HTMLButtonElement;
    constructor(private name: string,obs:Feu) {
        let container = document.querySelector("#cam-container") as HTMLDivElement
        let div =document.createElement("div")
        div.className ="div-camion"
        this.htmlDiv = document.createElement("div")
        this.htmlDiv.innerText = this.name
        this.htmlDiv.className = "cam-off"
        this.htmlButton = document.createElement("button")
        this.htmlButton.innerText = "unsubscribe"
        this.htmlButton.addEventListener("click",(e:Event)=>{
            if(this.htmlButton.innerText==="unsubscribe"){
                obs.unsubscribe(this)
                this.htmlButton.innerText="subscribe"
            }
            else{
                obs.subscribe(this)
                this.htmlButton.innerText="unsubscribe"
            }


        })
        div.appendChild(this.htmlDiv)
        div.appendChild(this.htmlButton)
        container.appendChild(div)

    }
 
    update(vitesse: number) {
        if(vitesse > 50){
            console.log("Arret camion" ,this.name)
            this.htmlDiv.className = "cam-off"
        }

        else{
            console.log("Partir" ,this.name)
            this.htmlDiv.className = "cam-on"
        }
    }
}
    