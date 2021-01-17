import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-tab',
  templateUrl: './order-tab.component.html',
  styleUrls: ['./order-tab.component.scss']
})
export class OrderTabComponent implements OnInit {

  constructor() { }

  orders = [
    {
      number:1242,
      status: "Pronto",
      items: [
        {
          id:15,
          qtty:5,
          price: 29.75,
          name: "Produto de teste 1",
          img: "https://www.spyoptic.com/dw/image/v2/BBNW_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6d538d1b/images/hi-res/Sun/SPY_HELM_MATTEBLACK_HAPPYBRONZEPOLARwGREENSPECTRA_673015374861-01.png"
        },
        {
          id:25,
          qtty:3,
          price: 38.33,
          name: "Produto de teste 2",
          img: "https://scorpiondive.com/wp-content/uploads/2016/06/fins.png"
        }
      ]
    },
    {
      number:12122,
      status: "Em espera",
      items: [
        {
          id:15,
          qtty:5,
          price: 29.75,
          name: "Produto de teste 1",
          img: "https://www.spyoptic.com/dw/image/v2/BBNW_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6d538d1b/images/hi-res/Sun/SPY_HELM_MATTEBLACK_HAPPYBRONZEPOLARwGREENSPECTRA_673015374861-01.png"
        },
        {
          id:25,
          qtty:3,
          price: 38.33,
          name: "Produto de teste 2",
          img: "https://scorpiondive.com/wp-content/uploads/2016/06/fins.png"
        },
        {
          id:9,
          qtty:1,
          price: 96.70,
          name: "Produto de teste 3",
          img: "https://scorpiondive.com/wp-content/uploads/2016/06/fins.png"
        }
      ]
    },
  ]

  ngOnInit() {
  }

}
