import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'prateleira-section',
  templateUrl: './prateleira-section.component.html',
  styleUrls: ['./prateleira-section.component.scss']
})
export class PrateleiraSectionComponent implements OnInit {

  constructor() { }
  @Input() sectionInfo : any;
  ngOnInit() {
  }

}
