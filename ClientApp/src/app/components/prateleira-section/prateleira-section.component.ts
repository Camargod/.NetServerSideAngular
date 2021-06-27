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
  buttonStyle = ["invisible",""];

  mockProductList : Array<ProductCard> = PrateleiraMock;
  ngOnInit() {
  }

  nextItem(isPositiveX : boolean){
    let scrollSize = isPositiveX ? this.widthToScroll : -this.widthToScroll;
    let scrollTo = this.prateleiraListDiv.nativeElement.scrollLeft + scrollSize;
    this.prateleiraListDiv.nativeElement.scrollTo({left:scrollTo,behavior:"smooth"});
    setTimeout(()=>{
      this.validatePrateleiraButtonsVisibility(scrollTo);
    },300)
    
  }

  moveByWheel(event : WheelEvent){
    event.preventDefault();
    this.prateleiraListDiv.nativeElement.scrollLeft += event.deltaY
  }

  validatePrateleiraButtonsVisibility(scrollTo : number){
    let maxScrollLeft = this.prateleiraListDiv.nativeElement.scrollWidth - this.prateleiraListDiv.nativeElement.clientWidth;

    if(scrollTo > 0 && this.prateleiraListDiv.nativeElement.scrollLeft < maxScrollLeft){
      this.buttonStyle.fill("");
    }
    else if(this.prateleiraListDiv.nativeElement.scrollLeft >= maxScrollLeft) this.buttonStyle[1] = "invisible";
    else if(scrollTo <= 0) this.buttonStyle[0] = "invisible";
  }

  prateleiraSwipe(event){
    debugger
    console.log(event);
  }
}
