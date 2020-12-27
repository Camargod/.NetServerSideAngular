import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PrateleiraMock } from 'src/app/objects/prateleira-mock';
import ProductCard from '../../entities/product-card';

@Component({
  selector: 'prateleira-section',
  templateUrl: './prateleira-section.component.html',
  styleUrls: ['./prateleira-section.component.scss']
})
export class PrateleiraSectionComponent implements OnInit {

  constructor() { }
  @ViewChild('prateleiraList') prateleiraListDiv : ElementRef<HTMLDivElement>;
  @Input() sectionInfo : any;
  @Input() sectionTitle : string;
  widthToScroll = 330;

  mockProductList : Array<ProductCard> = PrateleiraMock;
  ngOnInit() {
  }

  nextItem(isPositiveX : boolean){
    let scrollSize = isPositiveX ? this.widthToScroll : -this.widthToScroll;
    let scrollTo = this.prateleiraListDiv.nativeElement.scrollLeft + scrollSize;
    this.prateleiraListDiv.nativeElement.scrollTo({left:scrollTo,behavior:"smooth"})
  }

}
