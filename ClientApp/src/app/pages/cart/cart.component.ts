import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterService } from 'src/app/components/footer/footer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  constructor(private footerService : FooterService) { }

  ngOnInit() {
    this.footerService.setFooter(false);
  }

  ngOnDestroy(): void {
    this.footerService.setFooter(true);
  }

}
