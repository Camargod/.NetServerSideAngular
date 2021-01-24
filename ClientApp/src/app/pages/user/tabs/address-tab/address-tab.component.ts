import { Component, OnInit } from '@angular/core';
import { AddressMock } from 'src/app/objects/address-mock';

@Component({
  selector: 'app-address-tab',
  templateUrl: './address-tab.component.html',
  styleUrls: ['./address-tab.component.scss']
})
export class AddressTabComponent implements OnInit {

  constructor() { }

  adresses = AddressMock

  ngOnInit() {
  }

}
