import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard, AuthService } from '@auth0/auth0-angular';
import { of } from 'rxjs';
import { AddressTabComponent } from './tabs/address-tab/address-tab.component';
import { OrderTabComponent } from './tabs/order-tab/order-tab.component';
import { RatingTabComponent } from './tabs/rating-tab/rating-tab.component';
import { RegisterTabComponent } from './tabs/register-tab/register-tab.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private router : Router,private auth : AuthService) { }

  tabs = [
    {name:"order",label:"Pedidos",component:OrderTabComponent},
    {name:"register",label:"Cadastro",component:RegisterTabComponent},
    {name:"address",label:"Endereço",component:AddressTabComponent},
    {name:"rating", label:"Avaliações",component:RatingTabComponent}
  ]

  async ngOnInit() {
    debugger;
    this.auth.isAuthenticated$.pipe((loggedIn) => {
      if (!loggedIn) {
        this.router.navigate([''])
        console.log("Não está logado");
      }
      else {
          console.log("está logado");
          return of(true);
      }
    })
  }

}
