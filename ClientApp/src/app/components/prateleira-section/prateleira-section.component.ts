import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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

  mockProductList : Array<ProductCard> = [
    {
      name : "Prancha",
      image: "https://jaguarecomercial.vteximg.com.br/arquivos/ids/155741-1000-1000/KIT-DE-IMOBILIZ.-E-RESGATE--TIPO-CIPA--C-CAPA-AZUL---PRANCHA-DE-MADEIRA_2067726674609.png?v=636558650106600000",
      price: 29.72,
      evaluation: 5
    },
    {
      name : "Prancha 2",
      image: "https://www.kaluasup.com.br/wp-content/uploads/2015/12/prancha-sup-azul-madeira-5.png",
      price: 49.25,
      evaluation: 4
    },
    {
      name : "Prancha 3",
      image: "https://www.kaluasup.com.br/wp-content/uploads/2015/12/prancha-sup-azul-madeira-5.png",
      price: 79.99,
      evaluation: 3
    },
    {
      name : "Prancha 3",
      image: "https://www.kaluasup.com.br/wp-content/uploads/2015/12/prancha-sup-azul-madeira-5.png",
      price: 79.99,
      evaluation: 3
    },
    {
      name : "Prancha 3",
      image: "https://www.kaluasup.com.br/wp-content/uploads/2015/12/prancha-sup-azul-madeira-5.png",
      price: 79.99,
      evaluation: 3
    },
    {
      name : "Prancha 3",
      image: "https://www.kaluasup.com.br/wp-content/uploads/2015/12/prancha-sup-azul-madeira-5.png",
      price: 79.99,
      evaluation: 3
    },
    {
      name : "Prancha 3",
      image: "https://www.kaluasup.com.br/wp-content/uploads/2015/12/prancha-sup-azul-madeira-5.png",
      price: 79.99,
      evaluation: 3
    },
    {
      name : "Prancha 3",
      image: "https://www.kaluasup.com.br/wp-content/uploads/2015/12/prancha-sup-azul-madeira-5.png",
      price: 79.99,
      evaluation: 3
    }
  ]
  ngOnInit() {
  }

  nextItem(isPositiveX : boolean){
    let scrollSize = isPositiveX ? this.widthToScroll : -this.widthToScroll;
    let scrollTo = this.prateleiraListDiv.nativeElement.scrollLeft + scrollSize;
    // if()
    this.prateleiraListDiv.nativeElement.scrollTo({left:scrollTo,behavior:"smooth"})
  }

}
