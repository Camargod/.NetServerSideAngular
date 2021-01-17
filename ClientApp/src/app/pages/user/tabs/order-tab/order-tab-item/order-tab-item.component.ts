import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'order-tab-item',
  templateUrl: './order-tab-item.component.html',
  styleUrls: ['./order-tab-item.component.scss']
})
export class OrderTabItemComponent implements OnInit {

  constructor() { }

  @Input() product : any;
  itemSubtotal = 0;

  ngOnInit() {
    this.setSubTotal();
  }

  setSubTotal(){
    this.itemSubtotal = this.product.price * this.product.qtty;
  }

}
