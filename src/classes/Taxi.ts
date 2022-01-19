import { IObserver } from "../interfaces/IObserver";

export class Taxi implements IObserver {
    constructor(private name: string) {

    }

    update(temp: number) {
        if(temp<0){
            console.log("Arret taxi" ,this.name)
        }
        else{
            console.log()
        }
    }
    }
    