import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubCategoriesMock } from 'src/app/objects/categories-mock';

@Component({
  selector: 'category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})

export class CategoryPageComponent implements OnInit {
  @ViewChild("body",{static:false}) body : ElementRef<HTMLDivElement>;
  @Input() title = "";
  constructor(private route: ActivatedRoute) { }

  subCategories = SubCategoriesMock

  columnWidth = 25;

  ngOnInit() {
    if(this.title == ""){
      this.route.params.subscribe((params)=>{
        this.title = params.categoryName

      })
    }
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