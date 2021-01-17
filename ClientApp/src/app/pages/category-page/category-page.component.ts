import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SubCategoriesMock } from 'src/app/objects/categories-mock';

@Component({
  selector: 'category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})

export class CategoryPageComponent implements OnInit {
  @ViewChild("body",{static:false}) body : ElementRef<HTMLDivElement>;
  constructor() { }

  subCategories = SubCategoriesMock

  columnWidth = 25;

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.calculateColumns();
    },200)
  }

  @HostListener('window:resize', ['$event'])
  calculateColumns = () => {
    this.columnWidth = 100 / Math.floor(this.body.nativeElement.clientWidth / 300)
  }
}