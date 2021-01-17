import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  tabs = [
    {name:"order",label:"Pedidos",component:OrderTabComponent},
    {name:"register",label:"Cadastro",component:RegisterTabComponent},
    {name:"address",label:"Pedidos",component:AddressTabComponent},
    {name:"rating", label:"Avaliações",component:RatingTabComponent}
  ]

  ngOnInit() {
  }

}
