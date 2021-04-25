import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
    providedIn: "root"
})

export class FooterService{
    public _enableFooter : BehaviorSubject<boolean> = new BehaviorSubject(true)

    setFooter(state : boolean){
        this._enableFooter.next(state)
    }
}