import { Component, Input, OnInit } from '@angular/core';
import ProductCard from 'src/app/entities/product-card';
import { SubCategoryCard } from 'src/app/entities/subCategory-card';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product : ProductCard;
  @Input() hasFav = true;
  constructor() { }

  ngOnInit() {
  }

}
