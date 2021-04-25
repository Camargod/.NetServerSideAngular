import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { FooterService } from "./footer.service";

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrls: [
        'footer.component.scss'
    ]

})

export class FooterComponent implements OnInit, OnDestroy {
    isFooterEnabled = true;

    footerStatusSubcription : Subscription;
    constructor(private service : FooterService){
    }

    ngOnInit(): void {
        this.startFooterSubscription();
    }

    startFooterSubscription(){
        this.footerStatusSubcription = this.service._enableFooter.subscribe((status)=>{
            this.isFooterEnabled = status
        }) 
    }

    ngOnDestroy(): void {
        this.footerStatusSubcription.unsubscribe();
    }

}