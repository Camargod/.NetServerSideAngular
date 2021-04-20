import { Injectable } from "@angular/core";
import { AuthGuard } from "@auth0/auth0-angular";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class LoginService{

    constructor(private auth : AuthGuard){
        
    }

    isLogged : BehaviorSubject<boolean> = new BehaviorSubject(false);


}