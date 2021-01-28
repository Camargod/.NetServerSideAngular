import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent implements OnInit {

  constructor() { }

  @Input() evaluation = 0;
  @Input() productId = 0;

  ngOnInit() {
  }

}
