import { Component, Input, OnInit } from '@angular/core';
import ProductCard from 'src/app/entities/product-card';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product : ProductCard;
  constructor() { }

  ngOnInit() {
  }

}
