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
  @Input() cardType : CardTypeEnum = CardTypeEnum.PRODUCT;

  classByType = "";

  cardTypeEnum = CardTypeEnum;

  constructor() { }

  ngOnInit() {
    switch(this.cardType){
      case CardTypeEnum.PRODUCT:
        this.classByType = "product";
        break;
      case CardTypeEnum.CATEGORY:
        this.classByType = "category";
        break;
    }
  }

}

export enum CardTypeEnum {
  PRODUCT = "product",
  CATEGORY = "category"
}

