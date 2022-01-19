import { IObserver } from "../interfaces/IObserver";
import { ISubject } from "../interfaces/ISubject";

export class Feu implements ISubject{

    private observers: IObserver[] = [];
    constructor(private feu: number) { 
        this.notifyObservers()

    }

    
    subscribe(obs: IObserver){
        this.observers.push(obs)
    }

    unsubscribe(obs: IObserver){
        const idx = this.observers.indexOf(obs)
        this.observers.splice(idx, 1)
    }

    
    notifyObservers(){
        for (const elm of this.observers){
         elm.update(this.feu)
            }
        }
        setvitesse (v:number){
            this.feu=v
            this.notifyObservers()
        }


}



